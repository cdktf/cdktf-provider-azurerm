# `dataAzurermApiManagementGatewayHostNameConfiguration` Submodule <a name="`dataAzurermApiManagementGatewayHostNameConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermApiManagementGatewayHostNameConfiguration <a name="DataAzurermApiManagementGatewayHostNameConfiguration" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration azurerm_api_management_gateway_host_name_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermapimanagementgatewayhostnameconfiguration"

dataazurermapimanagementgatewayhostnameconfiguration.NewDataAzurermApiManagementGatewayHostNameConfiguration(scope Construct, id *string, config DataAzurermApiManagementGatewayHostNameConfigurationConfig) DataAzurermApiManagementGatewayHostNameConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig">DataAzurermApiManagementGatewayHostNameConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig">DataAzurermApiManagementGatewayHostNameConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermApiManagementGatewayHostNameConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermApiManagementGatewayHostNameConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermapimanagementgatewayhostnameconfiguration"

dataazurermapimanagementgatewayhostnameconfiguration.DataAzurermApiManagementGatewayHostNameConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermapimanagementgatewayhostnameconfiguration"

dataazurermapimanagementgatewayhostnameconfiguration.DataAzurermApiManagementGatewayHostNameConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermapimanagementgatewayhostnameconfiguration"

dataazurermapimanagementgatewayhostnameconfiguration.DataAzurermApiManagementGatewayHostNameConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermapimanagementgatewayhostnameconfiguration"

dataazurermapimanagementgatewayhostnameconfiguration.DataAzurermApiManagementGatewayHostNameConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermApiManagementGatewayHostNameConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermApiManagementGatewayHostNameConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermApiManagementGatewayHostNameConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermApiManagementGatewayHostNameConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.http2Enabled">Http2Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled">RequestClientCertificateEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls10Enabled">Tls10Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls11Enabled">Tls11Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput">ApiManagementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayNameInput">GatewayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementId">ApiManagementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayName">GatewayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.http2Enabled"></a>

```go
func Http2Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RequestClientCertificateEnabled`<sup>Required</sup> <a name="RequestClientCertificateEnabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled"></a>

```go
func RequestClientCertificateEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeouts"></a>

```go
func Timeouts() DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a>

---

##### `Tls10Enabled`<sup>Required</sup> <a name="Tls10Enabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls10Enabled"></a>

```go
func Tls10Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Tls11Enabled`<sup>Required</sup> <a name="Tls11Enabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls11Enabled"></a>

```go
func Tls11Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ApiManagementIdInput`<sup>Optional</sup> <a name="ApiManagementIdInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput"></a>

```go
func ApiManagementIdInput() *string
```

- *Type:* *string

---

##### `GatewayNameInput`<sup>Optional</sup> <a name="GatewayNameInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayNameInput"></a>

```go
func GatewayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementId"></a>

```go
func ApiManagementId() *string
```

- *Type:* *string

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayName"></a>

```go
func GatewayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermApiManagementGatewayHostNameConfigurationConfig <a name="DataAzurermApiManagementGatewayHostNameConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermapimanagementgatewayhostnameconfiguration"

&dataazurermapimanagementgatewayhostnameconfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementId: *string,
	GatewayName: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId">ApiManagementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#api_management_id DataAzurermApiManagementGatewayHostNameConfiguration#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.gatewayName">GatewayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#gateway_name DataAzurermApiManagementGatewayHostNameConfiguration#gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#name DataAzurermApiManagementGatewayHostNameConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#id DataAzurermApiManagementGatewayHostNameConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId"></a>

```go
ApiManagementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#api_management_id DataAzurermApiManagementGatewayHostNameConfiguration#api_management_id}.

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.gatewayName"></a>

```go
GatewayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#gateway_name DataAzurermApiManagementGatewayHostNameConfiguration#gateway_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#name DataAzurermApiManagementGatewayHostNameConfiguration#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#id DataAzurermApiManagementGatewayHostNameConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.timeouts"></a>

```go
Timeouts DataAzurermApiManagementGatewayHostNameConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#timeouts DataAzurermApiManagementGatewayHostNameConfiguration#timeouts}

---

### DataAzurermApiManagementGatewayHostNameConfigurationTimeouts <a name="DataAzurermApiManagementGatewayHostNameConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermapimanagementgatewayhostnameconfiguration"

&dataazurermapimanagementgatewayhostnameconfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#read DataAzurermApiManagementGatewayHostNameConfiguration#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/api_management_gateway_host_name_configuration#read DataAzurermApiManagementGatewayHostNameConfiguration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference <a name="DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermapimanagementgatewayhostnameconfiguration"

dataazurermapimanagementgatewayhostnameconfiguration.NewDataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



