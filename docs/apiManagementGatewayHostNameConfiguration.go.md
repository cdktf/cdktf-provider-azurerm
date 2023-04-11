# `apiManagementGatewayHostNameConfiguration` Submodule <a name="`apiManagementGatewayHostNameConfiguration` Submodule" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementGatewayHostNameConfiguration <a name="ApiManagementGatewayHostNameConfiguration" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration azurerm_api_management_gateway_host_name_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/apimanagementgatewayhostnameconfiguration"

apimanagementgatewayhostnameconfiguration.NewApiManagementGatewayHostNameConfiguration(scope Construct, id *string, config ApiManagementGatewayHostNameConfigurationConfig) ApiManagementGatewayHostNameConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig">ApiManagementGatewayHostNameConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig">ApiManagementGatewayHostNameConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetRequestClientCertificateEnabled">ResetRequestClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls10Enabled">ResetTls10Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls11Enabled">ResetTls11Enabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementGatewayHostNameConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

---

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetHttp2Enabled"></a>

```go
func ResetHttp2Enabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetRequestClientCertificateEnabled` <a name="ResetRequestClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetRequestClientCertificateEnabled"></a>

```go
func ResetRequestClientCertificateEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTls10Enabled` <a name="ResetTls10Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls10Enabled"></a>

```go
func ResetTls10Enabled()
```

##### `ResetTls11Enabled` <a name="ResetTls11Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls11Enabled"></a>

```go
func ResetTls11Enabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/apimanagementgatewayhostnameconfiguration"

apimanagementgatewayhostnameconfiguration.ApiManagementGatewayHostNameConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/apimanagementgatewayhostnameconfiguration"

apimanagementgatewayhostnameconfiguration.ApiManagementGatewayHostNameConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/apimanagementgatewayhostnameconfiguration"

apimanagementgatewayhostnameconfiguration.ApiManagementGatewayHostNameConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput">ApiManagementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayNameInput">GatewayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabledInput">RequestClientCertificateEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10EnabledInput">Tls10EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11EnabledInput">Tls11EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementId">ApiManagementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayName">GatewayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2Enabled">Http2Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled">RequestClientCertificateEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10Enabled">Tls10Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11Enabled">Tls11Enabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeouts"></a>

```go
func Timeouts() ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a>

---

##### `ApiManagementIdInput`<sup>Optional</sup> <a name="ApiManagementIdInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput"></a>

```go
func ApiManagementIdInput() *string
```

- *Type:* *string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `GatewayNameInput`<sup>Optional</sup> <a name="GatewayNameInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayNameInput"></a>

```go
func GatewayNameInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2EnabledInput"></a>

```go
func Http2EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequestClientCertificateEnabledInput`<sup>Optional</sup> <a name="RequestClientCertificateEnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabledInput"></a>

```go
func RequestClientCertificateEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Tls10EnabledInput`<sup>Optional</sup> <a name="Tls10EnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10EnabledInput"></a>

```go
func Tls10EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Tls11EnabledInput`<sup>Optional</sup> <a name="Tls11EnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11EnabledInput"></a>

```go
func Tls11EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementId"></a>

```go
func ApiManagementId() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayName"></a>

```go
func GatewayName() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2Enabled"></a>

```go
func Http2Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RequestClientCertificateEnabled`<sup>Required</sup> <a name="RequestClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled"></a>

```go
func RequestClientCertificateEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tls10Enabled`<sup>Required</sup> <a name="Tls10Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10Enabled"></a>

```go
func Tls10Enabled() interface{}
```

- *Type:* interface{}

---

##### `Tls11Enabled`<sup>Required</sup> <a name="Tls11Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11Enabled"></a>

```go
func Tls11Enabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementGatewayHostNameConfigurationConfig <a name="ApiManagementGatewayHostNameConfigurationConfig" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/apimanagementgatewayhostnameconfiguration"

&apimanagementgatewayhostnameconfiguration.ApiManagementGatewayHostNameConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementId: *string,
	CertificateId: *string,
	GatewayName: *string,
	HostName: *string,
	Name: *string,
	Http2Enabled: interface{},
	Id: *string,
	RequestClientCertificateEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts,
	Tls10Enabled: interface{},
	Tls11Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId">ApiManagementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#api_management_id ApiManagementGatewayHostNameConfiguration#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.certificateId">CertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#certificate_id ApiManagementGatewayHostNameConfiguration#certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.gatewayName">GatewayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#gateway_name ApiManagementGatewayHostNameConfiguration#gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#host_name ApiManagementGatewayHostNameConfiguration#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#name ApiManagementGatewayHostNameConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.http2Enabled">Http2Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#http2_enabled ApiManagementGatewayHostNameConfiguration#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#id ApiManagementGatewayHostNameConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.requestClientCertificateEnabled">RequestClientCertificateEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#request_client_certificate_enabled ApiManagementGatewayHostNameConfiguration#request_client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls10Enabled">Tls10Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#tls10_enabled ApiManagementGatewayHostNameConfiguration#tls10_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls11Enabled">Tls11Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#tls11_enabled ApiManagementGatewayHostNameConfiguration#tls11_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId"></a>

```go
ApiManagementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#api_management_id ApiManagementGatewayHostNameConfiguration#api_management_id}.

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#certificate_id ApiManagementGatewayHostNameConfiguration#certificate_id}.

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.gatewayName"></a>

```go
GatewayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#gateway_name ApiManagementGatewayHostNameConfiguration#gateway_name}.

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#host_name ApiManagementGatewayHostNameConfiguration#host_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#name ApiManagementGatewayHostNameConfiguration#name}.

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.http2Enabled"></a>

```go
Http2Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#http2_enabled ApiManagementGatewayHostNameConfiguration#http2_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#id ApiManagementGatewayHostNameConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequestClientCertificateEnabled`<sup>Optional</sup> <a name="RequestClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.requestClientCertificateEnabled"></a>

```go
RequestClientCertificateEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#request_client_certificate_enabled ApiManagementGatewayHostNameConfiguration#request_client_certificate_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.timeouts"></a>

```go
Timeouts ApiManagementGatewayHostNameConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#timeouts ApiManagementGatewayHostNameConfiguration#timeouts}

---

##### `Tls10Enabled`<sup>Optional</sup> <a name="Tls10Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls10Enabled"></a>

```go
Tls10Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#tls10_enabled ApiManagementGatewayHostNameConfiguration#tls10_enabled}.

---

##### `Tls11Enabled`<sup>Optional</sup> <a name="Tls11Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls11Enabled"></a>

```go
Tls11Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#tls11_enabled ApiManagementGatewayHostNameConfiguration#tls11_enabled}.

---

### ApiManagementGatewayHostNameConfigurationTimeouts <a name="ApiManagementGatewayHostNameConfigurationTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/apimanagementgatewayhostnameconfiguration"

&apimanagementgatewayhostnameconfiguration.ApiManagementGatewayHostNameConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#create ApiManagementGatewayHostNameConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#delete ApiManagementGatewayHostNameConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#read ApiManagementGatewayHostNameConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#update ApiManagementGatewayHostNameConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#create ApiManagementGatewayHostNameConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#delete ApiManagementGatewayHostNameConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#read ApiManagementGatewayHostNameConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_gateway_host_name_configuration#update ApiManagementGatewayHostNameConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference <a name="ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/apimanagementgatewayhostnameconfiguration"

apimanagementgatewayhostnameconfiguration.NewApiManagementGatewayHostNameConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



