import * as React from 'react';
import {
  Text, View, StyleSheet,
  ScrollView, Button, Image, TouchableOpacity,
} from 'react-native';
import Header from '../Header.js';
import { withNavigation, } from 'react-navigation';
const myStyles = require('../../assets/styles.js');



class UsesAndCredits extends React.Component{
  static navigationOptions = { header: null };
  
  
  render() {
    return(
      <View style={styles.container}>
        <Header backButton = { true }/> 
        
        <ScrollView>
          <Text style = {{borderBottomWidth: 1, paddingBottom: 10, fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
            Uses and Credits
          </Text>
          
          <View style={{ backgroundColor: 'white', }}>
            <Text style={ styles.liText }>
              Flaticons made by:{"\n\n"}
                {"\t"}bandIcon - Freepik{"\n"}
                {"\t"}orchestraIcon - Freepik{"\n"}
                {"\t"}dramaIcon - Pixel Buddha{"\n"}
                {"\t"}choirIcon - Freepik{"\n"}
                {"\t"}schoolDanceIcon - smalllikeart{"\n"}
                {"\t"}ACT/SAT Icon - Freepik{"\n"}
                {"\t"}assemblyIcon - Dave Gandy{"\n"}
                {"\t"}tutoringIcon - geotatah{"\n"}
                {"\t"}cheerIcon - Freepik{"\n"}
                {"\t"}theatreDanceIcon - SkyClick{"\n"}
                {"\t"}pepRallyIcon - Freepik{"\n"}
                {"\t"}clubMeetingIcon - Becris{"\n"}
                {"\t"}baseballIcon - Freepik{"\n"}
                {"\t"}basketballIcon - Freepik{"\n"}
                {"\t"}footballIcon - Freepik{"\n"}
                {"\t"}soccerIcon - Freepik{"\n"}
                {"\t"}wrestlingIcon - Freepik{"\n"}
                {"\t"}volleyballIcon - Freepik{"\n"}
                {"\t"}tennisIcon - Freepik{"\n"}
                {"\t"}trackAndFieldIcon - Freepik{"\n"}
                {"\t"}bowlingIcon - Pixel Buddha{"\n"}
                {"\t"}crossCountryIcon - Freepik{"\n"}
                {"\t"}golfIcon - Smashicons{"\n"}
                {"\t"}twitterIcon - Freepik{"\n"}
                {"\t"}instagramIcon - Freepik{"\n"}
                {"\t"}facebookIcon - Freepik{"\n"}
                {"\t"}rightArrowIcon - ahref{"\n\n\n"}

                react-native-vector-icons:{"\n"}
                The MIT License (MIT){"\n"}

                Copyright (c) 2016 Nader Dabit{"\n"}

                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:{"\n"}

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.{"\n"}

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.{"\n\n"}

                react-native-status-bar-height:{"\n"}
                The MIT License (MIT){"\n"}

                Copyright (c) 2016 Nader Dabit{"\n"}

                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:{"\n"}

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.{"\n"}

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.{"\n\n"}

                react-native-paper:{"\n"}
                The MIT License (MIT){"\n"}

                Copyright (c) 2016 Nader Dabit{"\n"}

                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:{"\n"}

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.{"\n"}

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.{"\n\n"}

                react-native-modal-dropdown:{"\n"}
                The MIT License (MIT){"\n"}

                Copyright (c) 2016 Nader Dabit{"\n"}

                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:{"\n"}

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.{"\n"}

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.{"\n\n"}

                react-native-elements:{"\n"}
                The MIT License (MIT){"\n"}

                Copyright (c) 2016 Nader Dabit{"\n"}

                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:{"\n"}

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.{"\n"}

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.{"\n\n"}

                BSD License{"\n"}
                For React Navigation software{"\n"}
                Copyright (c) 2016-present, React Navigation Contributors. All rights reserved.
                Redistribution and use in source and binary forms, with or without modification,
                are permitted provided that the following conditions are met:{"\n"}
                {"\t"}* Redistributions of source code must retain the above copyright notice, this
                  list of conditions and the following disclaimer.{"\n"}
                {"\t"}* Redistributions in binary form must reproduce the above copyright notice,
                  this list of conditions and the following disclaimer in the documentation
                  and/or other materials provided with the distribution.{"\n"}
                THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
                ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
                WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
                ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
                (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
                LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
                ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
                (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
                SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation( UsesAndCredits );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ecf0f1', //#ecf0f1 is gray color throughout
    paddingBottom: 20,
  },
  liText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 10,
  },
});