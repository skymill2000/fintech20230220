from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('http://www.eum.go.kr/web/am/amMain.jsp')

sido = Select(driver.find_element(By.XPATH,'//*[@id="selSido"]'))
sido.select_by_visible_text('전라남도')
driver.implicitly_wait(1)

gun = Select(driver.find_element(By.XPATH,'//*[@id="selSgg"]'))
gun.select_by_visible_text('고흥군')
driver.implicitly_wait(1)

dong = Select(driver.find_element(By.XPATH,'//*[@id="selUmd"]'))
dong.select_by_visible_text('고흥읍')
driver.implicitly_wait(1)

ri = Select(driver.find_element(By.XPATH, '//*[@id="selRi"]'))
ri.select_by_visible_text('남계리')

bobn = driver.find_element(By.XPATH,'//*[@id="bobn"]')
bobn.send_keys(45)

bubn = driver.find_element(By.XPATH,'//*[@id="bubn"]')
bubn.send_keys(1)

button = driver.find_element(By.XPATH, '//*[@id="frm"]/fieldset/div[3]/p/span/a')
button.click()

price = driver.find_element(By.XPATH, '//*[@id="appoint"]/div[2]/table/tbody/tr[3]/td')
print(price.text)
