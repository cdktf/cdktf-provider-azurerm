# `azurerm_api_management`

Refer to the Terraform Registory for docs: [`azurerm_api_management`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management).

# `apiManagement` Submodule <a name="`apiManagement` Submodule" id="@cdktf/provider-azurerm.apiManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagement <a name="ApiManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management azurerm_api_management}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagement(scope Construct, id *string, config ApiManagementConfig) ApiManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig">ApiManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig">ApiManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation">PutAdditionalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation">PutDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration">PutHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols">PutProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity">PutSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn">PutSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp">PutSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess">PutTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration">PutVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetAdditionalLocation">ResetAdditionalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetClientCertificateEnabled">ResetClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetDelegation">ResetDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetGatewayDisabled">ResetGatewayDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetHostnameConfiguration">ResetHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetMinApiVersion">ResetMinApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetNotificationSenderEmail">ResetNotificationSenderEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicIpAddressId">ResetPublicIpAddressId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSecurity">ResetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignIn">ResetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignUp">ResetSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTenantAccess">ResetTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkConfiguration">ResetVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkType">ResetVirtualNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAdditionalLocation` <a name="PutAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation"></a>

```go
func PutAdditionalLocation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate"></a>

```go
func PutCertificate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDelegation` <a name="PutDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation"></a>

```go
func PutDelegation(value ApiManagementDelegation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---

##### `PutHostnameConfiguration` <a name="PutHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration"></a>

```go
func PutHostnameConfiguration(value ApiManagementHostnameConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity"></a>

```go
func PutIdentity(value ApiManagementIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---

##### `PutPolicy` <a name="PutPolicy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy"></a>

```go
func PutPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProtocols` <a name="PutProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols"></a>

```go
func PutProtocols(value ApiManagementProtocols)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---

##### `PutSecurity` <a name="PutSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity"></a>

```go
func PutSecurity(value ApiManagementSecurity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---

##### `PutSignIn` <a name="PutSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn"></a>

```go
func PutSignIn(value ApiManagementSignIn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---

##### `PutSignUp` <a name="PutSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp"></a>

```go
func PutSignUp(value ApiManagementSignUp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---

##### `PutTenantAccess` <a name="PutTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess"></a>

```go
func PutTenantAccess(value ApiManagementTenantAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

---

##### `PutVirtualNetworkConfiguration` <a name="PutVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration"></a>

```go
func PutVirtualNetworkConfiguration(value ApiManagementVirtualNetworkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---

##### `ResetAdditionalLocation` <a name="ResetAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetAdditionalLocation"></a>

```go
func ResetAdditionalLocation()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetClientCertificateEnabled` <a name="ResetClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetClientCertificateEnabled"></a>

```go
func ResetClientCertificateEnabled()
```

##### `ResetDelegation` <a name="ResetDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetDelegation"></a>

```go
func ResetDelegation()
```

##### `ResetGatewayDisabled` <a name="ResetGatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetGatewayDisabled"></a>

```go
func ResetGatewayDisabled()
```

##### `ResetHostnameConfiguration` <a name="ResetHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetHostnameConfiguration"></a>

```go
func ResetHostnameConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetMinApiVersion` <a name="ResetMinApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetMinApiVersion"></a>

```go
func ResetMinApiVersion()
```

##### `ResetNotificationSenderEmail` <a name="ResetNotificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetNotificationSenderEmail"></a>

```go
func ResetNotificationSenderEmail()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetPublicIpAddressId` <a name="ResetPublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicIpAddressId"></a>

```go
func ResetPublicIpAddressId()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetSecurity` <a name="ResetSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSecurity"></a>

```go
func ResetSecurity()
```

##### `ResetSignIn` <a name="ResetSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignIn"></a>

```go
func ResetSignIn()
```

##### `ResetSignUp` <a name="ResetSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignUp"></a>

```go
func ResetSignUp()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTenantAccess` <a name="ResetTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTenantAccess"></a>

```go
func ResetTenantAccess()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVirtualNetworkConfiguration` <a name="ResetVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkConfiguration"></a>

```go
func ResetVirtualNetworkConfiguration()
```

##### `ResetVirtualNetworkType` <a name="ResetVirtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkType"></a>

```go
func ResetVirtualNetworkType()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetZones"></a>

```go
func ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.ApiManagement_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.ApiManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.ApiManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocation">AdditionalLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList">ApiManagementAdditionalLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList">ApiManagementCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegation">Delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference">ApiManagementDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.developerPortalUrl">DeveloperPortalUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayRegionalUrl">GatewayRegionalUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayUrl">GatewayUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfiguration">HostnameConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference">ApiManagementHostnameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference">ApiManagementIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.managementApiUrl">ManagementApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList">ApiManagementPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.portalUrl">PortalUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocols">Protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference">ApiManagementProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddresses">PublicIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.scmUrl">ScmUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference">ApiManagementSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference">ApiManagementSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUp">SignUp</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference">ApiManagementSignUpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccess">TenantAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference">ApiManagementTenantAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference">ApiManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfiguration">VirtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference">ApiManagementVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocationInput">AdditionalLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificateInput">CertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabledInput">ClientCertificateEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegationInput">DelegationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabledInput">GatewayDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfigurationInput">HostnameConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersionInput">MinApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmailInput">NotificationSenderEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policyInput">PolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocolsInput">ProtocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressIdInput">PublicIpAddressIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmailInput">PublisherEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherNameInput">PublisherNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.securityInput">SecurityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signInInput">SignInInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUpInput">SignUpInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccessInput">TenantAccessInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfigurationInput">VirtualNetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkTypeInput">VirtualNetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabled">ClientCertificateEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabled">GatewayDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersion">MinApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmail">NotificationSenderEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmail">PublisherEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherName">PublisherName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkType">VirtualNetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalLocation`<sup>Required</sup> <a name="AdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocation"></a>

```go
func AdditionalLocation() ApiManagementAdditionalLocationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList">ApiManagementAdditionalLocationList</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificate"></a>

```go
func Certificate() ApiManagementCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList">ApiManagementCertificateList</a>

---

##### `Delegation`<sup>Required</sup> <a name="Delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegation"></a>

```go
func Delegation() ApiManagementDelegationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference">ApiManagementDelegationOutputReference</a>

---

##### `DeveloperPortalUrl`<sup>Required</sup> <a name="DeveloperPortalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.developerPortalUrl"></a>

```go
func DeveloperPortalUrl() *string
```

- *Type:* *string

---

##### `GatewayRegionalUrl`<sup>Required</sup> <a name="GatewayRegionalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayRegionalUrl"></a>

```go
func GatewayRegionalUrl() *string
```

- *Type:* *string

---

##### `GatewayUrl`<sup>Required</sup> <a name="GatewayUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayUrl"></a>

```go
func GatewayUrl() *string
```

- *Type:* *string

---

##### `HostnameConfiguration`<sup>Required</sup> <a name="HostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfiguration"></a>

```go
func HostnameConfiguration() ApiManagementHostnameConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference">ApiManagementHostnameConfigurationOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identity"></a>

```go
func Identity() ApiManagementIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference">ApiManagementIdentityOutputReference</a>

---

##### `ManagementApiUrl`<sup>Required</sup> <a name="ManagementApiUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.managementApiUrl"></a>

```go
func ManagementApiUrl() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policy"></a>

```go
func Policy() ApiManagementPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList">ApiManagementPolicyList</a>

---

##### `PortalUrl`<sup>Required</sup> <a name="PortalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.portalUrl"></a>

```go
func PortalUrl() *string
```

- *Type:* *string

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.privateIpAddresses"></a>

```go
func PrivateIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocols"></a>

```go
func Protocols() ApiManagementProtocolsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference">ApiManagementProtocolsOutputReference</a>

---

##### `PublicIpAddresses`<sup>Required</sup> <a name="PublicIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddresses"></a>

```go
func PublicIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ScmUrl`<sup>Required</sup> <a name="ScmUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.scmUrl"></a>

```go
func ScmUrl() *string
```

- *Type:* *string

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.security"></a>

```go
func Security() ApiManagementSecurityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference">ApiManagementSecurityOutputReference</a>

---

##### `SignIn`<sup>Required</sup> <a name="SignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signIn"></a>

```go
func SignIn() ApiManagementSignInOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference">ApiManagementSignInOutputReference</a>

---

##### `SignUp`<sup>Required</sup> <a name="SignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUp"></a>

```go
func SignUp() ApiManagementSignUpOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference">ApiManagementSignUpOutputReference</a>

---

##### `TenantAccess`<sup>Required</sup> <a name="TenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccess"></a>

```go
func TenantAccess() ApiManagementTenantAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference">ApiManagementTenantAccessOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeouts"></a>

```go
func Timeouts() ApiManagementTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference">ApiManagementTimeoutsOutputReference</a>

---

##### `VirtualNetworkConfiguration`<sup>Required</sup> <a name="VirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfiguration"></a>

```go
func VirtualNetworkConfiguration() ApiManagementVirtualNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference">ApiManagementVirtualNetworkConfigurationOutputReference</a>

---

##### `AdditionalLocationInput`<sup>Optional</sup> <a name="AdditionalLocationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocationInput"></a>

```go
func AdditionalLocationInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificateInput"></a>

```go
func CertificateInput() interface{}
```

- *Type:* interface{}

---

##### `ClientCertificateEnabledInput`<sup>Optional</sup> <a name="ClientCertificateEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabledInput"></a>

```go
func ClientCertificateEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DelegationInput`<sup>Optional</sup> <a name="DelegationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegationInput"></a>

```go
func DelegationInput() ApiManagementDelegation
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---

##### `GatewayDisabledInput`<sup>Optional</sup> <a name="GatewayDisabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabledInput"></a>

```go
func GatewayDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostnameConfigurationInput`<sup>Optional</sup> <a name="HostnameConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfigurationInput"></a>

```go
func HostnameConfigurationInput() ApiManagementHostnameConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identityInput"></a>

```go
func IdentityInput() ApiManagementIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MinApiVersionInput`<sup>Optional</sup> <a name="MinApiVersionInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersionInput"></a>

```go
func MinApiVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationSenderEmailInput`<sup>Optional</sup> <a name="NotificationSenderEmailInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmailInput"></a>

```go
func NotificationSenderEmailInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policyInput"></a>

```go
func PolicyInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocolsInput"></a>

```go
func ProtocolsInput() ApiManagementProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---

##### `PublicIpAddressIdInput`<sup>Optional</sup> <a name="PublicIpAddressIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressIdInput"></a>

```go
func PublicIpAddressIdInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PublisherEmailInput`<sup>Optional</sup> <a name="PublisherEmailInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmailInput"></a>

```go
func PublisherEmailInput() *string
```

- *Type:* *string

---

##### `PublisherNameInput`<sup>Optional</sup> <a name="PublisherNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherNameInput"></a>

```go
func PublisherNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.securityInput"></a>

```go
func SecurityInput() ApiManagementSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---

##### `SignInInput`<sup>Optional</sup> <a name="SignInInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signInInput"></a>

```go
func SignInInput() ApiManagementSignIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---

##### `SignUpInput`<sup>Optional</sup> <a name="SignUpInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUpInput"></a>

```go
func SignUpInput() ApiManagementSignUp
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TenantAccessInput`<sup>Optional</sup> <a name="TenantAccessInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccessInput"></a>

```go
func TenantAccessInput() ApiManagementTenantAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkConfigurationInput`<sup>Optional</sup> <a name="VirtualNetworkConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfigurationInput"></a>

```go
func VirtualNetworkConfigurationInput() ApiManagementVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---

##### `VirtualNetworkTypeInput`<sup>Optional</sup> <a name="VirtualNetworkTypeInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkTypeInput"></a>

```go
func VirtualNetworkTypeInput() *string
```

- *Type:* *string

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientCertificateEnabled`<sup>Required</sup> <a name="ClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabled"></a>

```go
func ClientCertificateEnabled() interface{}
```

- *Type:* interface{}

---

##### `GatewayDisabled`<sup>Required</sup> <a name="GatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabled"></a>

```go
func GatewayDisabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MinApiVersion`<sup>Required</sup> <a name="MinApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersion"></a>

```go
func MinApiVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationSenderEmail`<sup>Required</sup> <a name="NotificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmail"></a>

```go
func NotificationSenderEmail() *string
```

- *Type:* *string

---

##### `PublicIpAddressId`<sup>Required</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressId"></a>

```go
func PublicIpAddressId() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `PublisherEmail`<sup>Required</sup> <a name="PublisherEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmail"></a>

```go
func PublisherEmail() *string
```

- *Type:* *string

---

##### `PublisherName`<sup>Required</sup> <a name="PublisherName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherName"></a>

```go
func PublisherName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualNetworkType`<sup>Required</sup> <a name="VirtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkType"></a>

```go
func VirtualNetworkType() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementAdditionalLocation <a name="ApiManagementAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementAdditionalLocation {
	Location: *string,
	Capacity: *f64,
	GatewayDisabled: interface{},
	PublicIpAddressId: *string,
	VirtualNetworkConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration,
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#capacity ApiManagement#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.gatewayDisabled">GatewayDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.virtualNetworkConfiguration">VirtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.zones">Zones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#zones ApiManagement#zones}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#location ApiManagement#location}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#capacity ApiManagement#capacity}.

---

##### `GatewayDisabled`<sup>Optional</sup> <a name="GatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.gatewayDisabled"></a>

```go
GatewayDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `PublicIpAddressId`<sup>Optional</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.publicIpAddressId"></a>

```go
PublicIpAddressId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `VirtualNetworkConfiguration`<sup>Optional</sup> <a name="VirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.virtualNetworkConfiguration"></a>

```go
VirtualNetworkConfiguration ApiManagementAdditionalLocationVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#zones ApiManagement#zones}.

---

### ApiManagementAdditionalLocationVirtualNetworkConfiguration <a name="ApiManagementAdditionalLocationVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration {
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}.

---

### ApiManagementCertificate <a name="ApiManagementCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementCertificate {
	EncodedCertificate: *string,
	StoreName: *string,
	CertificatePassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.encodedCertificate">EncodedCertificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#encoded_certificate ApiManagement#encoded_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.storeName">StoreName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#store_name ApiManagement#store_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |

---

##### `EncodedCertificate`<sup>Required</sup> <a name="EncodedCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.encodedCertificate"></a>

```go
EncodedCertificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#encoded_certificate ApiManagement#encoded_certificate}.

---

##### `StoreName`<sup>Required</sup> <a name="StoreName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.storeName"></a>

```go
StoreName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#store_name ApiManagement#store_name}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

### ApiManagementConfig <a name="ApiManagementConfig" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	PublisherEmail: *string,
	PublisherName: *string,
	ResourceGroupName: *string,
	SkuName: *string,
	AdditionalLocation: interface{},
	Certificate: interface{},
	ClientCertificateEnabled: interface{},
	Delegation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementDelegation,
	GatewayDisabled: interface{},
	HostnameConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementHostnameConfiguration,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementIdentity,
	MinApiVersion: *string,
	NotificationSenderEmail: *string,
	Policy: interface{},
	Protocols: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementProtocols,
	PublicIpAddressId: *string,
	PublicNetworkAccessEnabled: interface{},
	Security: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementSecurity,
	SignIn: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementSignIn,
	SignUp: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementSignUp,
	Tags: *map[string]*string,
	TenantAccess: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementTenantAccess,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementTimeouts,
	VirtualNetworkConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementVirtualNetworkConfiguration,
	VirtualNetworkType: *string,
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#name ApiManagement#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherEmail">PublisherEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#publisher_email ApiManagement#publisher_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherName">PublisherName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#publisher_name ApiManagement#publisher_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#resource_group_name ApiManagement#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#sku_name ApiManagement#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.additionalLocation">AdditionalLocation</a></code> | <code>interface{}</code> | additional_location block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.certificate">Certificate</a></code> | <code>interface{}</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.clientCertificateEnabled">ClientCertificateEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.delegation">Delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | delegation block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.gatewayDisabled">GatewayDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.hostnameConfiguration">HostnameConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | hostname_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#id ApiManagement#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.minApiVersion">MinApiVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#min_api_version ApiManagement#min_api_version}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.notificationSenderEmail">NotificationSenderEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#notification_sender_email ApiManagement#notification_sender_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.policy">Policy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#policy ApiManagement#policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.protocols">Protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | protocols block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signUp">SignUp</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | sign_up block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tags ApiManagement#tags}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tenantAccess">TenantAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | tenant_access block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkConfiguration">VirtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkType">VirtualNetworkType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#virtual_network_type ApiManagement#virtual_network_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#zones ApiManagement#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#location ApiManagement#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#name ApiManagement#name}.

---

##### `PublisherEmail`<sup>Required</sup> <a name="PublisherEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherEmail"></a>

```go
PublisherEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#publisher_email ApiManagement#publisher_email}.

---

##### `PublisherName`<sup>Required</sup> <a name="PublisherName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherName"></a>

```go
PublisherName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#publisher_name ApiManagement#publisher_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#resource_group_name ApiManagement#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#sku_name ApiManagement#sku_name}.

---

##### `AdditionalLocation`<sup>Optional</sup> <a name="AdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.additionalLocation"></a>

```go
AdditionalLocation interface{}
```

- *Type:* interface{}

additional_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#additional_location ApiManagement#additional_location}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.certificate"></a>

```go
Certificate interface{}
```

- *Type:* interface{}

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate ApiManagement#certificate}

---

##### `ClientCertificateEnabled`<sup>Optional</sup> <a name="ClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.clientCertificateEnabled"></a>

```go
ClientCertificateEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}.

---

##### `Delegation`<sup>Optional</sup> <a name="Delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.delegation"></a>

```go
Delegation ApiManagementDelegation
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#delegation ApiManagement#delegation}

---

##### `GatewayDisabled`<sup>Optional</sup> <a name="GatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.gatewayDisabled"></a>

```go
GatewayDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `HostnameConfiguration`<sup>Optional</sup> <a name="HostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.hostnameConfiguration"></a>

```go
HostnameConfiguration ApiManagementHostnameConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

hostname_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#hostname_configuration ApiManagement#hostname_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#id ApiManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.identity"></a>

```go
Identity ApiManagementIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#identity ApiManagement#identity}

---

##### `MinApiVersion`<sup>Optional</sup> <a name="MinApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.minApiVersion"></a>

```go
MinApiVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#min_api_version ApiManagement#min_api_version}.

---

##### `NotificationSenderEmail`<sup>Optional</sup> <a name="NotificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.notificationSenderEmail"></a>

```go
NotificationSenderEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#notification_sender_email ApiManagement#notification_sender_email}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.policy"></a>

```go
Policy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#policy ApiManagement#policy}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.protocols"></a>

```go
Protocols ApiManagementProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#protocols ApiManagement#protocols}

---

##### `PublicIpAddressId`<sup>Optional</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicIpAddressId"></a>

```go
PublicIpAddressId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}.

---

##### `Security`<sup>Optional</sup> <a name="Security" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.security"></a>

```go
Security ApiManagementSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#security ApiManagement#security}

---

##### `SignIn`<sup>Optional</sup> <a name="SignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signIn"></a>

```go
SignIn ApiManagementSignIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#sign_in ApiManagement#sign_in}

---

##### `SignUp`<sup>Optional</sup> <a name="SignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signUp"></a>

```go
SignUp ApiManagementSignUp
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

sign_up block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#sign_up ApiManagement#sign_up}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tags ApiManagement#tags}.

---

##### `TenantAccess`<sup>Optional</sup> <a name="TenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tenantAccess"></a>

```go
TenantAccess ApiManagementTenantAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

tenant_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tenant_access ApiManagement#tenant_access}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.timeouts"></a>

```go
Timeouts ApiManagementTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#timeouts ApiManagement#timeouts}

---

##### `VirtualNetworkConfiguration`<sup>Optional</sup> <a name="VirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkConfiguration"></a>

```go
VirtualNetworkConfiguration ApiManagementVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `VirtualNetworkType`<sup>Optional</sup> <a name="VirtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkType"></a>

```go
VirtualNetworkType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#virtual_network_type ApiManagement#virtual_network_type}.

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#zones ApiManagement#zones}.

---

### ApiManagementDelegation <a name="ApiManagementDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementDelegation {
	SubscriptionsEnabled: interface{},
	Url: *string,
	UserRegistrationEnabled: interface{},
	ValidationKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.subscriptionsEnabled">SubscriptionsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#url ApiManagement#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.userRegistrationEnabled">UserRegistrationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#user_registration_enabled ApiManagement#user_registration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.validationKey">ValidationKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#validation_key ApiManagement#validation_key}. |

---

##### `SubscriptionsEnabled`<sup>Optional</sup> <a name="SubscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.subscriptionsEnabled"></a>

```go
SubscriptionsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#url ApiManagement#url}.

---

##### `UserRegistrationEnabled`<sup>Optional</sup> <a name="UserRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.userRegistrationEnabled"></a>

```go
UserRegistrationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#user_registration_enabled ApiManagement#user_registration_enabled}.

---

##### `ValidationKey`<sup>Optional</sup> <a name="ValidationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.validationKey"></a>

```go
ValidationKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#validation_key ApiManagement#validation_key}.

---

### ApiManagementHostnameConfiguration <a name="ApiManagementHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementHostnameConfiguration {
	DeveloperPortal: interface{},
	Management: interface{},
	Portal: interface{},
	Proxy: interface{},
	Scm: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.developerPortal">DeveloperPortal</a></code> | <code>interface{}</code> | developer_portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.management">Management</a></code> | <code>interface{}</code> | management block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.portal">Portal</a></code> | <code>interface{}</code> | portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.proxy">Proxy</a></code> | <code>interface{}</code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.scm">Scm</a></code> | <code>interface{}</code> | scm block. |

---

##### `DeveloperPortal`<sup>Optional</sup> <a name="DeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.developerPortal"></a>

```go
DeveloperPortal interface{}
```

- *Type:* interface{}

developer_portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#developer_portal ApiManagement#developer_portal}

---

##### `Management`<sup>Optional</sup> <a name="Management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.management"></a>

```go
Management interface{}
```

- *Type:* interface{}

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#management ApiManagement#management}

---

##### `Portal`<sup>Optional</sup> <a name="Portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.portal"></a>

```go
Portal interface{}
```

- *Type:* interface{}

portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#portal ApiManagement#portal}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.proxy"></a>

```go
Proxy interface{}
```

- *Type:* interface{}

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#proxy ApiManagement#proxy}

---

##### `Scm`<sup>Optional</sup> <a name="Scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.scm"></a>

```go
Scm interface{}
```

- *Type:* interface{}

scm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#scm ApiManagement#scm}

---

### ApiManagementHostnameConfigurationDeveloperPortal <a name="ApiManagementHostnameConfigurationDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementHostnameConfigurationDeveloperPortal {
	HostName: *string,
	Certificate: *string,
	CertificatePassword: *string,
	KeyVaultId: *string,
	NegotiateClientCertificate: interface{},
	SslKeyvaultIdentityClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.negotiateClientCertificate"></a>

```go
NegotiateClientCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.sslKeyvaultIdentityClientId"></a>

```go
SslKeyvaultIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationManagement <a name="ApiManagementHostnameConfigurationManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementHostnameConfigurationManagement {
	HostName: *string,
	Certificate: *string,
	CertificatePassword: *string,
	KeyVaultId: *string,
	NegotiateClientCertificate: interface{},
	SslKeyvaultIdentityClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.negotiateClientCertificate"></a>

```go
NegotiateClientCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.sslKeyvaultIdentityClientId"></a>

```go
SslKeyvaultIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationPortal <a name="ApiManagementHostnameConfigurationPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementHostnameConfigurationPortal {
	HostName: *string,
	Certificate: *string,
	CertificatePassword: *string,
	KeyVaultId: *string,
	NegotiateClientCertificate: interface{},
	SslKeyvaultIdentityClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.negotiateClientCertificate"></a>

```go
NegotiateClientCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.sslKeyvaultIdentityClientId"></a>

```go
SslKeyvaultIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationProxy <a name="ApiManagementHostnameConfigurationProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementHostnameConfigurationProxy {
	HostName: *string,
	Certificate: *string,
	CertificatePassword: *string,
	DefaultSslBinding: interface{},
	KeyVaultId: *string,
	NegotiateClientCertificate: interface{},
	SslKeyvaultIdentityClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.defaultSslBinding">DefaultSslBinding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#default_ssl_binding ApiManagement#default_ssl_binding}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `DefaultSslBinding`<sup>Optional</sup> <a name="DefaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.defaultSslBinding"></a>

```go
DefaultSslBinding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#default_ssl_binding ApiManagement#default_ssl_binding}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.negotiateClientCertificate"></a>

```go
NegotiateClientCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.sslKeyvaultIdentityClientId"></a>

```go
SslKeyvaultIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationScm <a name="ApiManagementHostnameConfigurationScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementHostnameConfigurationScm {
	HostName: *string,
	Certificate: *string,
	CertificatePassword: *string,
	KeyVaultId: *string,
	NegotiateClientCertificate: interface{},
	SslKeyvaultIdentityClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.negotiateClientCertificate"></a>

```go
NegotiateClientCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.sslKeyvaultIdentityClientId"></a>

```go
SslKeyvaultIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementIdentity <a name="ApiManagementIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#type ApiManagement#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#identity_ids ApiManagement#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#type ApiManagement#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#identity_ids ApiManagement#identity_ids}.

---

### ApiManagementPolicy <a name="ApiManagementPolicy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementPolicy {
	XmlContent: *string,
	XmlLink: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlContent">XmlContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#xml_content ApiManagement#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlLink">XmlLink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#xml_link ApiManagement#xml_link}. |

---

##### `XmlContent`<sup>Optional</sup> <a name="XmlContent" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlContent"></a>

```go
XmlContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#xml_content ApiManagement#xml_content}.

---

##### `XmlLink`<sup>Optional</sup> <a name="XmlLink" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlLink"></a>

```go
XmlLink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#xml_link ApiManagement#xml_link}.

---

### ApiManagementProtocols <a name="ApiManagementProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementProtocols {
	EnableHttp2: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.enableHttp2">EnableHttp2</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_http2 ApiManagement#enable_http2}. |

---

##### `EnableHttp2`<sup>Optional</sup> <a name="EnableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.enableHttp2"></a>

```go
EnableHttp2 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_http2 ApiManagement#enable_http2}.

---

### ApiManagementSecurity <a name="ApiManagementSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementSecurity {
	EnableBackendSsl30: interface{},
	EnableBackendTls10: interface{},
	EnableBackendTls11: interface{},
	EnableFrontendSsl30: interface{},
	EnableFrontendTls10: interface{},
	EnableFrontendTls11: interface{},
	TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled: interface{},
	TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled: interface{},
	TlsEcdheRsaWithAes128CbcShaCiphersEnabled: interface{},
	TlsEcdheRsaWithAes256CbcShaCiphersEnabled: interface{},
	TlsRsaWithAes128CbcSha256CiphersEnabled: interface{},
	TlsRsaWithAes128CbcShaCiphersEnabled: interface{},
	TlsRsaWithAes128GcmSha256CiphersEnabled: interface{},
	TlsRsaWithAes256CbcSha256CiphersEnabled: interface{},
	TlsRsaWithAes256CbcShaCiphersEnabled: interface{},
	TlsRsaWithAes256GcmSha384CiphersEnabled: interface{},
	TripleDesCiphersEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendSsl30">EnableBackendSsl30</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls10">EnableBackendTls10</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls11">EnableBackendTls11</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendSsl30">EnableFrontendSsl30</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls10">EnableFrontendTls10</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls11">EnableFrontendTls11</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled">TlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled">TlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcSha256CiphersEnabled">TlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcShaCiphersEnabled">TlsRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128GcmSha256CiphersEnabled">TlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcSha256CiphersEnabled">TlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcShaCiphersEnabled">TlsRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256GcmSha384CiphersEnabled">TlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tripleDesCiphersEnabled">TripleDesCiphersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}. |

---

##### `EnableBackendSsl30`<sup>Optional</sup> <a name="EnableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendSsl30"></a>

```go
EnableBackendSsl30 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}.

---

##### `EnableBackendTls10`<sup>Optional</sup> <a name="EnableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls10"></a>

```go
EnableBackendTls10 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}.

---

##### `EnableBackendTls11`<sup>Optional</sup> <a name="EnableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls11"></a>

```go
EnableBackendTls11 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}.

---

##### `EnableFrontendSsl30`<sup>Optional</sup> <a name="EnableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendSsl30"></a>

```go
EnableFrontendSsl30 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}.

---

##### `EnableFrontendTls10`<sup>Optional</sup> <a name="EnableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls10"></a>

```go
EnableFrontendTls10 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}.

---

##### `EnableFrontendTls11`<sup>Optional</sup> <a name="EnableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls11"></a>

```go
EnableFrontendTls11 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}.

---

##### `TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```go
TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```go
TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `TlsEcdheRsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```go
TlsEcdheRsaWithAes128CbcShaCiphersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `TlsEcdheRsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```go
TlsEcdheRsaWithAes256CbcShaCiphersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `TlsRsaWithAes128CbcSha256CiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```go
TlsRsaWithAes128CbcSha256CiphersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}.

---

##### `TlsRsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcShaCiphersEnabled"></a>

```go
TlsRsaWithAes128CbcShaCiphersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `TlsRsaWithAes128GcmSha256CiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```go
TlsRsaWithAes128GcmSha256CiphersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}.

---

##### `TlsRsaWithAes256CbcSha256CiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```go
TlsRsaWithAes256CbcSha256CiphersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}.

---

##### `TlsRsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcShaCiphersEnabled"></a>

```go
TlsRsaWithAes256CbcShaCiphersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `TlsRsaWithAes256GcmSha384CiphersEnabled`<sup>Optional</sup> <a name="TlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```go
TlsRsaWithAes256GcmSha384CiphersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}.

---

##### `TripleDesCiphersEnabled`<sup>Optional</sup> <a name="TripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tripleDesCiphersEnabled"></a>

```go
TripleDesCiphersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}.

---

### ApiManagementSignIn <a name="ApiManagementSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementSignIn {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enabled ApiManagement#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

### ApiManagementSignUp <a name="ApiManagementSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementSignUp {
	Enabled: interface{},
	TermsOfService: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.apiManagement.ApiManagementSignUpTermsOfService,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enabled ApiManagement#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.termsOfService">TermsOfService</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | terms_of_service block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

##### `TermsOfService`<sup>Required</sup> <a name="TermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.termsOfService"></a>

```go
TermsOfService ApiManagementSignUpTermsOfService
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

terms_of_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#terms_of_service ApiManagement#terms_of_service}

---

### ApiManagementSignUpTermsOfService <a name="ApiManagementSignUpTermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementSignUpTermsOfService {
	ConsentRequired: interface{},
	Enabled: interface{},
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.consentRequired">ConsentRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#consent_required ApiManagement#consent_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enabled ApiManagement#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#text ApiManagement#text}. |

---

##### `ConsentRequired`<sup>Required</sup> <a name="ConsentRequired" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.consentRequired"></a>

```go
ConsentRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#consent_required ApiManagement#consent_required}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#text ApiManagement#text}.

---

### ApiManagementTenantAccess <a name="ApiManagementTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementTenantAccess {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enabled ApiManagement#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

### ApiManagementTimeouts <a name="ApiManagementTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#create ApiManagement#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#delete ApiManagement#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#read ApiManagement#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#update ApiManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#create ApiManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#delete ApiManagement#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#read ApiManagement#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#update ApiManagement#update}.

---

### ApiManagementVirtualNetworkConfiguration <a name="ApiManagementVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

&apimanagement.ApiManagementVirtualNetworkConfiguration {
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementAdditionalLocationList <a name="ApiManagementAdditionalLocationList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementAdditionalLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementAdditionalLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get"></a>

```go
func Get(index *f64) ApiManagementAdditionalLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementAdditionalLocationOutputReference <a name="ApiManagementAdditionalLocationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementAdditionalLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementAdditionalLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration">PutVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetGatewayDisabled">ResetGatewayDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetPublicIpAddressId">ResetPublicIpAddressId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetVirtualNetworkConfiguration">ResetVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVirtualNetworkConfiguration` <a name="PutVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration"></a>

```go
func PutVirtualNetworkConfiguration(value ApiManagementAdditionalLocationVirtualNetworkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetCapacity"></a>

```go
func ResetCapacity()
```

##### `ResetGatewayDisabled` <a name="ResetGatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetGatewayDisabled"></a>

```go
func ResetGatewayDisabled()
```

##### `ResetPublicIpAddressId` <a name="ResetPublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetPublicIpAddressId"></a>

```go
func ResetPublicIpAddressId()
```

##### `ResetVirtualNetworkConfiguration` <a name="ResetVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetVirtualNetworkConfiguration"></a>

```go
func ResetVirtualNetworkConfiguration()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetZones"></a>

```go
func ResetZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayRegionalUrl">GatewayRegionalUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddresses">PublicIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfiguration">VirtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference">ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabledInput">GatewayDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressIdInput">PublicIpAddressIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfigurationInput">VirtualNetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabled">GatewayDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GatewayRegionalUrl`<sup>Required</sup> <a name="GatewayRegionalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayRegionalUrl"></a>

```go
func GatewayRegionalUrl() *string
```

- *Type:* *string

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.privateIpAddresses"></a>

```go
func PrivateIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `PublicIpAddresses`<sup>Required</sup> <a name="PublicIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddresses"></a>

```go
func PublicIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualNetworkConfiguration`<sup>Required</sup> <a name="VirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfiguration"></a>

```go
func VirtualNetworkConfiguration() ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference">ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `GatewayDisabledInput`<sup>Optional</sup> <a name="GatewayDisabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabledInput"></a>

```go
func GatewayDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PublicIpAddressIdInput`<sup>Optional</sup> <a name="PublicIpAddressIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressIdInput"></a>

```go
func PublicIpAddressIdInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkConfigurationInput`<sup>Optional</sup> <a name="VirtualNetworkConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfigurationInput"></a>

```go
func VirtualNetworkConfigurationInput() ApiManagementAdditionalLocationVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `GatewayDisabled`<sup>Required</sup> <a name="GatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabled"></a>

```go
func GatewayDisabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PublicIpAddressId`<sup>Required</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressId"></a>

```go
func PublicIpAddressId() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference <a name="ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementAdditionalLocationVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---


### ApiManagementCertificateList <a name="ApiManagementCertificateList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get"></a>

```go
func Get(index *f64) ApiManagementCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementCertificateOutputReference <a name="ApiManagementCertificateOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resetCertificatePassword"></a>

```go
func ResetCertificatePassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificateInput">EncodedCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeNameInput">StoreNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificate">EncodedCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeName">StoreName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `EncodedCertificateInput`<sup>Optional</sup> <a name="EncodedCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificateInput"></a>

```go
func EncodedCertificateInput() *string
```

- *Type:* *string

---

##### `StoreNameInput`<sup>Optional</sup> <a name="StoreNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeNameInput"></a>

```go
func StoreNameInput() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `EncodedCertificate`<sup>Required</sup> <a name="EncodedCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificate"></a>

```go
func EncodedCertificate() *string
```

- *Type:* *string

---

##### `StoreName`<sup>Required</sup> <a name="StoreName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeName"></a>

```go
func StoreName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementDelegationOutputReference <a name="ApiManagementDelegationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementDelegationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementDelegationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetSubscriptionsEnabled">ResetSubscriptionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUserRegistrationEnabled">ResetUserRegistrationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetValidationKey">ResetValidationKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubscriptionsEnabled` <a name="ResetSubscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetSubscriptionsEnabled"></a>

```go
func ResetSubscriptionsEnabled()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUserRegistrationEnabled` <a name="ResetUserRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUserRegistrationEnabled"></a>

```go
func ResetUserRegistrationEnabled()
```

##### `ResetValidationKey` <a name="ResetValidationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetValidationKey"></a>

```go
func ResetValidationKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabledInput">SubscriptionsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabledInput">UserRegistrationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKeyInput">ValidationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabled">SubscriptionsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabled">UserRegistrationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKey">ValidationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubscriptionsEnabledInput`<sup>Optional</sup> <a name="SubscriptionsEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabledInput"></a>

```go
func SubscriptionsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UserRegistrationEnabledInput`<sup>Optional</sup> <a name="UserRegistrationEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabledInput"></a>

```go
func UserRegistrationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ValidationKeyInput`<sup>Optional</sup> <a name="ValidationKeyInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKeyInput"></a>

```go
func ValidationKeyInput() *string
```

- *Type:* *string

---

##### `SubscriptionsEnabled`<sup>Required</sup> <a name="SubscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabled"></a>

```go
func SubscriptionsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UserRegistrationEnabled`<sup>Required</sup> <a name="UserRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabled"></a>

```go
func UserRegistrationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ValidationKey`<sup>Required</sup> <a name="ValidationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKey"></a>

```go
func ValidationKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementDelegation
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---


### ApiManagementHostnameConfigurationDeveloperPortalList <a name="ApiManagementHostnameConfigurationDeveloperPortalList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementHostnameConfigurationDeveloperPortalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementHostnameConfigurationDeveloperPortalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get"></a>

```go
func Get(index *f64) ApiManagementHostnameConfigurationDeveloperPortalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementHostnameConfigurationDeveloperPortalOutputReference <a name="ApiManagementHostnameConfigurationDeveloperPortalOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementHostnameConfigurationDeveloperPortalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementHostnameConfigurationDeveloperPortalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificatePassword"></a>

```go
func ResetCertificatePassword()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultId"></a>

```go
func ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetNegotiateClientCertificate"></a>

```go
func ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```go
func ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateSource"></a>

```go
func CertificateSource() *string
```

- *Type:* *string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateStatus"></a>

```go
func CertificateStatus() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificateInput"></a>

```go
func NegotiateClientCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```go
func SslKeyvaultIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificate"></a>

```go
func NegotiateClientCertificate() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```go
func SslKeyvaultIdentityClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementHostnameConfigurationManagementList <a name="ApiManagementHostnameConfigurationManagementList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementHostnameConfigurationManagementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementHostnameConfigurationManagementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get"></a>

```go
func Get(index *f64) ApiManagementHostnameConfigurationManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementHostnameConfigurationManagementOutputReference <a name="ApiManagementHostnameConfigurationManagementOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementHostnameConfigurationManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementHostnameConfigurationManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificatePassword"></a>

```go
func ResetCertificatePassword()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultId"></a>

```go
func ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetNegotiateClientCertificate"></a>

```go
func ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetSslKeyvaultIdentityClientId"></a>

```go
func ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateSource"></a>

```go
func CertificateSource() *string
```

- *Type:* *string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateStatus"></a>

```go
func CertificateStatus() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificateInput"></a>

```go
func NegotiateClientCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```go
func SslKeyvaultIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificate"></a>

```go
func NegotiateClientCertificate() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientId"></a>

```go
func SslKeyvaultIdentityClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementHostnameConfigurationOutputReference <a name="ApiManagementHostnameConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementHostnameConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementHostnameConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal">PutDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement">PutManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal">PutPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy">PutProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm">PutScm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetDeveloperPortal">ResetDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetManagement">ResetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetPortal">ResetPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetScm">ResetScm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeveloperPortal` <a name="PutDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal"></a>

```go
func PutDeveloperPortal(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagement` <a name="PutManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement"></a>

```go
func PutManagement(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPortal` <a name="PutPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal"></a>

```go
func PutPortal(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProxy` <a name="PutProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy"></a>

```go
func PutProxy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScm` <a name="PutScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm"></a>

```go
func PutScm(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeveloperPortal` <a name="ResetDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetDeveloperPortal"></a>

```go
func ResetDeveloperPortal()
```

##### `ResetManagement` <a name="ResetManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetManagement"></a>

```go
func ResetManagement()
```

##### `ResetPortal` <a name="ResetPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetPortal"></a>

```go
func ResetPortal()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetProxy"></a>

```go
func ResetProxy()
```

##### `ResetScm` <a name="ResetScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetScm"></a>

```go
func ResetScm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortal">DeveloperPortal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList">ApiManagementHostnameConfigurationDeveloperPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.management">Management</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList">ApiManagementHostnameConfigurationManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portal">Portal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList">ApiManagementHostnameConfigurationPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList">ApiManagementHostnameConfigurationProxyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scm">Scm</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList">ApiManagementHostnameConfigurationScmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortalInput">DeveloperPortalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.managementInput">ManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portalInput">PortalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxyInput">ProxyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scmInput">ScmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeveloperPortal`<sup>Required</sup> <a name="DeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortal"></a>

```go
func DeveloperPortal() ApiManagementHostnameConfigurationDeveloperPortalList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList">ApiManagementHostnameConfigurationDeveloperPortalList</a>

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.management"></a>

```go
func Management() ApiManagementHostnameConfigurationManagementList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList">ApiManagementHostnameConfigurationManagementList</a>

---

##### `Portal`<sup>Required</sup> <a name="Portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portal"></a>

```go
func Portal() ApiManagementHostnameConfigurationPortalList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList">ApiManagementHostnameConfigurationPortalList</a>

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxy"></a>

```go
func Proxy() ApiManagementHostnameConfigurationProxyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList">ApiManagementHostnameConfigurationProxyList</a>

---

##### `Scm`<sup>Required</sup> <a name="Scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scm"></a>

```go
func Scm() ApiManagementHostnameConfigurationScmList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList">ApiManagementHostnameConfigurationScmList</a>

---

##### `DeveloperPortalInput`<sup>Optional</sup> <a name="DeveloperPortalInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortalInput"></a>

```go
func DeveloperPortalInput() interface{}
```

- *Type:* interface{}

---

##### `ManagementInput`<sup>Optional</sup> <a name="ManagementInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.managementInput"></a>

```go
func ManagementInput() interface{}
```

- *Type:* interface{}

---

##### `PortalInput`<sup>Optional</sup> <a name="PortalInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portalInput"></a>

```go
func PortalInput() interface{}
```

- *Type:* interface{}

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxyInput"></a>

```go
func ProxyInput() interface{}
```

- *Type:* interface{}

---

##### `ScmInput`<sup>Optional</sup> <a name="ScmInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scmInput"></a>

```go
func ScmInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementHostnameConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---


### ApiManagementHostnameConfigurationPortalList <a name="ApiManagementHostnameConfigurationPortalList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementHostnameConfigurationPortalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementHostnameConfigurationPortalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get"></a>

```go
func Get(index *f64) ApiManagementHostnameConfigurationPortalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementHostnameConfigurationPortalOutputReference <a name="ApiManagementHostnameConfigurationPortalOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementHostnameConfigurationPortalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementHostnameConfigurationPortalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificatePassword"></a>

```go
func ResetCertificatePassword()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultId"></a>

```go
func ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetNegotiateClientCertificate"></a>

```go
func ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```go
func ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateSource"></a>

```go
func CertificateSource() *string
```

- *Type:* *string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateStatus"></a>

```go
func CertificateStatus() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificateInput"></a>

```go
func NegotiateClientCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```go
func SslKeyvaultIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificate"></a>

```go
func NegotiateClientCertificate() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```go
func SslKeyvaultIdentityClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementHostnameConfigurationProxyList <a name="ApiManagementHostnameConfigurationProxyList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementHostnameConfigurationProxyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementHostnameConfigurationProxyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get"></a>

```go
func Get(index *f64) ApiManagementHostnameConfigurationProxyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementHostnameConfigurationProxyOutputReference <a name="ApiManagementHostnameConfigurationProxyOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementHostnameConfigurationProxyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementHostnameConfigurationProxyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetDefaultSslBinding">ResetDefaultSslBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificatePassword"></a>

```go
func ResetCertificatePassword()
```

##### `ResetDefaultSslBinding` <a name="ResetDefaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetDefaultSslBinding"></a>

```go
func ResetDefaultSslBinding()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultId"></a>

```go
func ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetNegotiateClientCertificate"></a>

```go
func ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetSslKeyvaultIdentityClientId"></a>

```go
func ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBindingInput">DefaultSslBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBinding">DefaultSslBinding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateSource"></a>

```go
func CertificateSource() *string
```

- *Type:* *string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateStatus"></a>

```go
func CertificateStatus() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `DefaultSslBindingInput`<sup>Optional</sup> <a name="DefaultSslBindingInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBindingInput"></a>

```go
func DefaultSslBindingInput() interface{}
```

- *Type:* interface{}

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificateInput"></a>

```go
func NegotiateClientCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```go
func SslKeyvaultIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `DefaultSslBinding`<sup>Required</sup> <a name="DefaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBinding"></a>

```go
func DefaultSslBinding() interface{}
```

- *Type:* interface{}

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificate"></a>

```go
func NegotiateClientCertificate() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientId"></a>

```go
func SslKeyvaultIdentityClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementHostnameConfigurationScmList <a name="ApiManagementHostnameConfigurationScmList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementHostnameConfigurationScmList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementHostnameConfigurationScmList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get"></a>

```go
func Get(index *f64) ApiManagementHostnameConfigurationScmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementHostnameConfigurationScmOutputReference <a name="ApiManagementHostnameConfigurationScmOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementHostnameConfigurationScmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementHostnameConfigurationScmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificatePassword"></a>

```go
func ResetCertificatePassword()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultId"></a>

```go
func ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetNegotiateClientCertificate"></a>

```go
func ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetSslKeyvaultIdentityClientId"></a>

```go
func ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateSource"></a>

```go
func CertificateSource() *string
```

- *Type:* *string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateStatus"></a>

```go
func CertificateStatus() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificateInput"></a>

```go
func NegotiateClientCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```go
func SslKeyvaultIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificate"></a>

```go
func NegotiateClientCertificate() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientId"></a>

```go
func SslKeyvaultIdentityClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementIdentityOutputReference <a name="ApiManagementIdentityOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---


### ApiManagementPolicyList <a name="ApiManagementPolicyList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get"></a>

```go
func Get(index *f64) ApiManagementPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementPolicyOutputReference <a name="ApiManagementPolicyOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlContent">ResetXmlContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlLink">ResetXmlLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXmlContent` <a name="ResetXmlContent" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlContent"></a>

```go
func ResetXmlContent()
```

##### `ResetXmlLink` <a name="ResetXmlLink" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlLink"></a>

```go
func ResetXmlLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContentInput">XmlContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLinkInput">XmlLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContent">XmlContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLink">XmlLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XmlContentInput`<sup>Optional</sup> <a name="XmlContentInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContentInput"></a>

```go
func XmlContentInput() *string
```

- *Type:* *string

---

##### `XmlLinkInput`<sup>Optional</sup> <a name="XmlLinkInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLinkInput"></a>

```go
func XmlLinkInput() *string
```

- *Type:* *string

---

##### `XmlContent`<sup>Required</sup> <a name="XmlContent" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContent"></a>

```go
func XmlContent() *string
```

- *Type:* *string

---

##### `XmlLink`<sup>Required</sup> <a name="XmlLink" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLink"></a>

```go
func XmlLink() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementProtocolsOutputReference <a name="ApiManagementProtocolsOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementProtocolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementProtocolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetEnableHttp2">ResetEnableHttp2</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableHttp2` <a name="ResetEnableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetEnableHttp2"></a>

```go
func ResetEnableHttp2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2Input">EnableHttp2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2">EnableHttp2</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableHttp2Input`<sup>Optional</sup> <a name="EnableHttp2Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2Input"></a>

```go
func EnableHttp2Input() interface{}
```

- *Type:* interface{}

---

##### `EnableHttp2`<sup>Required</sup> <a name="EnableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2"></a>

```go
func EnableHttp2() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---


### ApiManagementSecurityOutputReference <a name="ApiManagementSecurityOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementSecurityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementSecurityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendSsl30">ResetEnableBackendSsl30</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls10">ResetEnableBackendTls10</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls11">ResetEnableBackendTls11</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendSsl30">ResetEnableFrontendSsl30</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls10">ResetEnableFrontendTls10</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls11">ResetEnableFrontendTls11</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">ResetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">ResetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled">ResetTlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled">ResetTlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcSha256CiphersEnabled">ResetTlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcShaCiphersEnabled">ResetTlsRsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128GcmSha256CiphersEnabled">ResetTlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcSha256CiphersEnabled">ResetTlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcShaCiphersEnabled">ResetTlsRsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256GcmSha384CiphersEnabled">ResetTlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTripleDesCiphersEnabled">ResetTripleDesCiphersEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableBackendSsl30` <a name="ResetEnableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendSsl30"></a>

```go
func ResetEnableBackendSsl30()
```

##### `ResetEnableBackendTls10` <a name="ResetEnableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls10"></a>

```go
func ResetEnableBackendTls10()
```

##### `ResetEnableBackendTls11` <a name="ResetEnableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls11"></a>

```go
func ResetEnableBackendTls11()
```

##### `ResetEnableFrontendSsl30` <a name="ResetEnableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendSsl30"></a>

```go
func ResetEnableFrontendSsl30()
```

##### `ResetEnableFrontendTls10` <a name="ResetEnableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls10"></a>

```go
func ResetEnableFrontendTls10()
```

##### `ResetEnableFrontendTls11` <a name="ResetEnableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls11"></a>

```go
func ResetEnableFrontendTls11()
```

##### `ResetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled` <a name="ResetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```go
func ResetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled()
```

##### `ResetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled` <a name="ResetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```go
func ResetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled()
```

##### `ResetTlsEcdheRsaWithAes128CbcShaCiphersEnabled` <a name="ResetTlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```go
func ResetTlsEcdheRsaWithAes128CbcShaCiphersEnabled()
```

##### `ResetTlsEcdheRsaWithAes256CbcShaCiphersEnabled` <a name="ResetTlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```go
func ResetTlsEcdheRsaWithAes256CbcShaCiphersEnabled()
```

##### `ResetTlsRsaWithAes128CbcSha256CiphersEnabled` <a name="ResetTlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```go
func ResetTlsRsaWithAes128CbcSha256CiphersEnabled()
```

##### `ResetTlsRsaWithAes128CbcShaCiphersEnabled` <a name="ResetTlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcShaCiphersEnabled"></a>

```go
func ResetTlsRsaWithAes128CbcShaCiphersEnabled()
```

##### `ResetTlsRsaWithAes128GcmSha256CiphersEnabled` <a name="ResetTlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```go
func ResetTlsRsaWithAes128GcmSha256CiphersEnabled()
```

##### `ResetTlsRsaWithAes256CbcSha256CiphersEnabled` <a name="ResetTlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```go
func ResetTlsRsaWithAes256CbcSha256CiphersEnabled()
```

##### `ResetTlsRsaWithAes256CbcShaCiphersEnabled` <a name="ResetTlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcShaCiphersEnabled"></a>

```go
func ResetTlsRsaWithAes256CbcShaCiphersEnabled()
```

##### `ResetTlsRsaWithAes256GcmSha384CiphersEnabled` <a name="ResetTlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```go
func ResetTlsRsaWithAes256GcmSha384CiphersEnabled()
```

##### `ResetTripleDesCiphersEnabled` <a name="ResetTripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTripleDesCiphersEnabled"></a>

```go
func ResetTripleDesCiphersEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30Input">EnableBackendSsl30Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10Input">EnableBackendTls10Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11Input">EnableBackendTls11Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30Input">EnableFrontendSsl30Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10Input">EnableFrontendTls10Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11Input">EnableFrontendTls11Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput">TlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput">TlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput">TlsEcdheRsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput">TlsEcdheRsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabledInput">TlsRsaWithAes128CbcSha256CiphersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabledInput">TlsRsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabledInput">TlsRsaWithAes128GcmSha256CiphersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabledInput">TlsRsaWithAes256CbcSha256CiphersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabledInput">TlsRsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabledInput">TlsRsaWithAes256GcmSha384CiphersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabledInput">TripleDesCiphersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30">EnableBackendSsl30</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10">EnableBackendTls10</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11">EnableBackendTls11</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30">EnableFrontendSsl30</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10">EnableFrontendTls10</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11">EnableFrontendTls11</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled">TlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled">TlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabled">TlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabled">TlsRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabled">TlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabled">TlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabled">TlsRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabled">TlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabled">TripleDesCiphersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableBackendSsl30Input`<sup>Optional</sup> <a name="EnableBackendSsl30Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30Input"></a>

```go
func EnableBackendSsl30Input() interface{}
```

- *Type:* interface{}

---

##### `EnableBackendTls10Input`<sup>Optional</sup> <a name="EnableBackendTls10Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10Input"></a>

```go
func EnableBackendTls10Input() interface{}
```

- *Type:* interface{}

---

##### `EnableBackendTls11Input`<sup>Optional</sup> <a name="EnableBackendTls11Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11Input"></a>

```go
func EnableBackendTls11Input() interface{}
```

- *Type:* interface{}

---

##### `EnableFrontendSsl30Input`<sup>Optional</sup> <a name="EnableFrontendSsl30Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30Input"></a>

```go
func EnableFrontendSsl30Input() interface{}
```

- *Type:* interface{}

---

##### `EnableFrontendTls10Input`<sup>Optional</sup> <a name="EnableFrontendTls10Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10Input"></a>

```go
func EnableFrontendTls10Input() interface{}
```

- *Type:* interface{}

---

##### `EnableFrontendTls11Input`<sup>Optional</sup> <a name="EnableFrontendTls11Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11Input"></a>

```go
func EnableFrontendTls11Input() interface{}
```

- *Type:* interface{}

---

##### `TlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput"></a>

```go
func TlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput"></a>

```go
func TlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TlsEcdheRsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsEcdheRsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput"></a>

```go
func TlsEcdheRsaWithAes128CbcShaCiphersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TlsEcdheRsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsEcdheRsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput"></a>

```go
func TlsEcdheRsaWithAes256CbcShaCiphersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes128CbcSha256CiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes128CbcSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabledInput"></a>

```go
func TlsRsaWithAes128CbcSha256CiphersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabledInput"></a>

```go
func TlsRsaWithAes128CbcShaCiphersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes128GcmSha256CiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes128GcmSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabledInput"></a>

```go
func TlsRsaWithAes128GcmSha256CiphersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes256CbcSha256CiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes256CbcSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabledInput"></a>

```go
func TlsRsaWithAes256CbcSha256CiphersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabledInput"></a>

```go
func TlsRsaWithAes256CbcShaCiphersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes256GcmSha384CiphersEnabledInput`<sup>Optional</sup> <a name="TlsRsaWithAes256GcmSha384CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabledInput"></a>

```go
func TlsRsaWithAes256GcmSha384CiphersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TripleDesCiphersEnabledInput`<sup>Optional</sup> <a name="TripleDesCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabledInput"></a>

```go
func TripleDesCiphersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableBackendSsl30`<sup>Required</sup> <a name="EnableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30"></a>

```go
func EnableBackendSsl30() interface{}
```

- *Type:* interface{}

---

##### `EnableBackendTls10`<sup>Required</sup> <a name="EnableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10"></a>

```go
func EnableBackendTls10() interface{}
```

- *Type:* interface{}

---

##### `EnableBackendTls11`<sup>Required</sup> <a name="EnableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11"></a>

```go
func EnableBackendTls11() interface{}
```

- *Type:* interface{}

---

##### `EnableFrontendSsl30`<sup>Required</sup> <a name="EnableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30"></a>

```go
func EnableFrontendSsl30() interface{}
```

- *Type:* interface{}

---

##### `EnableFrontendTls10`<sup>Required</sup> <a name="EnableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10"></a>

```go
func EnableFrontendTls10() interface{}
```

- *Type:* interface{}

---

##### `EnableFrontendTls11`<sup>Required</sup> <a name="EnableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11"></a>

```go
func EnableFrontendTls11() interface{}
```

- *Type:* interface{}

---

##### `TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```go
func TlsEcdheEcdsaWithAes128CbcShaCiphersEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```go
func TlsEcdheEcdsaWithAes256CbcShaCiphersEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsEcdheRsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```go
func TlsEcdheRsaWithAes128CbcShaCiphersEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsEcdheRsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```go
func TlsEcdheRsaWithAes256CbcShaCiphersEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes128CbcSha256CiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```go
func TlsRsaWithAes128CbcSha256CiphersEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabled"></a>

```go
func TlsRsaWithAes128CbcShaCiphersEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes128GcmSha256CiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```go
func TlsRsaWithAes128GcmSha256CiphersEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes256CbcSha256CiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```go
func TlsRsaWithAes256CbcSha256CiphersEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabled"></a>

```go
func TlsRsaWithAes256CbcShaCiphersEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsRsaWithAes256GcmSha384CiphersEnabled`<sup>Required</sup> <a name="TlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```go
func TlsRsaWithAes256GcmSha384CiphersEnabled() interface{}
```

- *Type:* interface{}

---

##### `TripleDesCiphersEnabled`<sup>Required</sup> <a name="TripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabled"></a>

```go
func TripleDesCiphersEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---


### ApiManagementSignInOutputReference <a name="ApiManagementSignInOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementSignInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementSignInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementSignIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---


### ApiManagementSignUpOutputReference <a name="ApiManagementSignUpOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementSignUpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementSignUpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService">PutTermsOfService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTermsOfService` <a name="PutTermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService"></a>

```go
func PutTermsOfService(value ApiManagementSignUpTermsOfService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfService">TermsOfService</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference">ApiManagementSignUpTermsOfServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfServiceInput">TermsOfServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TermsOfService`<sup>Required</sup> <a name="TermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfService"></a>

```go
func TermsOfService() ApiManagementSignUpTermsOfServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference">ApiManagementSignUpTermsOfServiceOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TermsOfServiceInput`<sup>Optional</sup> <a name="TermsOfServiceInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfServiceInput"></a>

```go
func TermsOfServiceInput() ApiManagementSignUpTermsOfService
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementSignUp
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---


### ApiManagementSignUpTermsOfServiceOutputReference <a name="ApiManagementSignUpTermsOfServiceOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementSignUpTermsOfServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementSignUpTermsOfServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequiredInput">ConsentRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequired">ConsentRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsentRequiredInput`<sup>Optional</sup> <a name="ConsentRequiredInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequiredInput"></a>

```go
func ConsentRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `ConsentRequired`<sup>Required</sup> <a name="ConsentRequired" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequired"></a>

```go
func ConsentRequired() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementSignUpTermsOfService
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---


### ApiManagementTenantAccessOutputReference <a name="ApiManagementTenantAccessOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementTenantAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementTenantAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.secondaryKey">SecondaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.secondaryKey"></a>

```go
func SecondaryKey() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementTenantAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---


### ApiManagementTimeoutsOutputReference <a name="ApiManagementTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementVirtualNetworkConfigurationOutputReference <a name="ApiManagementVirtualNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/apimanagement"

apimanagement.NewApiManagementVirtualNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementVirtualNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---



