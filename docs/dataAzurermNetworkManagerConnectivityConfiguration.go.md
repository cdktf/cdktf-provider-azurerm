# `dataAzurermNetworkManagerConnectivityConfiguration` Submodule <a name="`dataAzurermNetworkManagerConnectivityConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetworkManagerConnectivityConfiguration <a name="DataAzurermNetworkManagerConnectivityConfiguration" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/network_manager_connectivity_configuration azurerm_network_manager_connectivity_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

dataazurermnetworkmanagerconnectivityconfiguration.NewDataAzurermNetworkManagerConnectivityConfiguration(scope Construct, id *string, config DataAzurermNetworkManagerConnectivityConfigurationConfig) DataAzurermNetworkManagerConnectivityConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig">DataAzurermNetworkManagerConnectivityConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig">DataAzurermNetworkManagerConnectivityConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermNetworkManagerConnectivityConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermNetworkManagerConnectivityConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

dataazurermnetworkmanagerconnectivityconfiguration.DataAzurermNetworkManagerConnectivityConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

dataazurermnetworkmanagerconnectivityconfiguration.DataAzurermNetworkManagerConnectivityConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

dataazurermnetworkmanagerconnectivityconfiguration.DataAzurermNetworkManagerConnectivityConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

dataazurermnetworkmanagerconnectivityconfiguration.DataAzurermNetworkManagerConnectivityConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermNetworkManagerConnectivityConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermNetworkManagerConnectivityConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermNetworkManagerConnectivityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/network_manager_connectivity_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermNetworkManagerConnectivityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.appliesToGroup">AppliesToGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.connectivityTopology">ConnectivityTopology</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled">DeleteExistingPeeringEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.globalMeshEnabled">GlobalMeshEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.hub">Hub</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList">DataAzurermNetworkManagerConnectivityConfigurationHubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference">DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerIdInput">NetworkManagerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerId">NetworkManagerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AppliesToGroup`<sup>Required</sup> <a name="AppliesToGroup" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.appliesToGroup"></a>

```go
func AppliesToGroup() DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList</a>

---

##### `ConnectivityTopology`<sup>Required</sup> <a name="ConnectivityTopology" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.connectivityTopology"></a>

```go
func ConnectivityTopology() *string
```

- *Type:* *string

---

##### `DeleteExistingPeeringEnabled`<sup>Required</sup> <a name="DeleteExistingPeeringEnabled" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled"></a>

```go
func DeleteExistingPeeringEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GlobalMeshEnabled`<sup>Required</sup> <a name="GlobalMeshEnabled" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.globalMeshEnabled"></a>

```go
func GlobalMeshEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Hub`<sup>Required</sup> <a name="Hub" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.hub"></a>

```go
func Hub() DataAzurermNetworkManagerConnectivityConfigurationHubList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList">DataAzurermNetworkManagerConnectivityConfigurationHubList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeouts"></a>

```go
func Timeouts() DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference">DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkManagerIdInput`<sup>Optional</sup> <a name="NetworkManagerIdInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerIdInput"></a>

```go
func NetworkManagerIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkManagerId`<sup>Required</sup> <a name="NetworkManagerId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerId"></a>

```go
func NetworkManagerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup <a name="DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

&dataazurermnetworkmanagerconnectivityconfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup {

}
```


### DataAzurermNetworkManagerConnectivityConfigurationConfig <a name="DataAzurermNetworkManagerConnectivityConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

&dataazurermnetworkmanagerconnectivityconfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NetworkManagerId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/network_manager_connectivity_configuration#name DataAzurermNetworkManagerConnectivityConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.networkManagerId">NetworkManagerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/network_manager_connectivity_configuration#network_manager_id DataAzurermNetworkManagerConnectivityConfiguration#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/network_manager_connectivity_configuration#id DataAzurermNetworkManagerConnectivityConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/network_manager_connectivity_configuration#name DataAzurermNetworkManagerConnectivityConfiguration#name}.

---

##### `NetworkManagerId`<sup>Required</sup> <a name="NetworkManagerId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.networkManagerId"></a>

```go
NetworkManagerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/network_manager_connectivity_configuration#network_manager_id DataAzurermNetworkManagerConnectivityConfiguration#network_manager_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/network_manager_connectivity_configuration#id DataAzurermNetworkManagerConnectivityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.timeouts"></a>

```go
Timeouts DataAzurermNetworkManagerConnectivityConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/network_manager_connectivity_configuration#timeouts DataAzurermNetworkManagerConnectivityConfiguration#timeouts}

---

### DataAzurermNetworkManagerConnectivityConfigurationHub <a name="DataAzurermNetworkManagerConnectivityConfigurationHub" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

&dataazurermnetworkmanagerconnectivityconfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub {

}
```


### DataAzurermNetworkManagerConnectivityConfigurationTimeouts <a name="DataAzurermNetworkManagerConnectivityConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

&dataazurermnetworkmanagerconnectivityconfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/network_manager_connectivity_configuration#read DataAzurermNetworkManagerConnectivityConfiguration#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/network_manager_connectivity_configuration#read DataAzurermNetworkManagerConnectivityConfiguration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList <a name="DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

dataazurermnetworkmanagerconnectivityconfiguration.NewDataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.get"></a>

```go
func Get(index *f64) DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference <a name="DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

dataazurermnetworkmanagerconnectivityconfiguration.NewDataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled">GlobalMeshEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity">GroupConnectivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId">NetworkGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway">UseHubGateway</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlobalMeshEnabled`<sup>Required</sup> <a name="GlobalMeshEnabled" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled"></a>

```go
func GlobalMeshEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `GroupConnectivity`<sup>Required</sup> <a name="GroupConnectivity" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity"></a>

```go
func GroupConnectivity() *string
```

- *Type:* *string

---

##### `NetworkGroupId`<sup>Required</sup> <a name="NetworkGroupId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId"></a>

```go
func NetworkGroupId() *string
```

- *Type:* *string

---

##### `UseHubGateway`<sup>Required</sup> <a name="UseHubGateway" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway"></a>

```go
func UseHubGateway() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup</a>

---


### DataAzurermNetworkManagerConnectivityConfigurationHubList <a name="DataAzurermNetworkManagerConnectivityConfigurationHubList" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

dataazurermnetworkmanagerconnectivityconfiguration.NewDataAzurermNetworkManagerConnectivityConfigurationHubList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermNetworkManagerConnectivityConfigurationHubList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.get"></a>

```go
func Get(index *f64) DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference <a name="DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

dataazurermnetworkmanagerconnectivityconfiguration.NewDataAzurermNetworkManagerConnectivityConfigurationHubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub">DataAzurermNetworkManagerConnectivityConfigurationHub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermNetworkManagerConnectivityConfigurationHub
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub">DataAzurermNetworkManagerConnectivityConfigurationHub</a>

---


### DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference <a name="DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermnetworkmanagerconnectivityconfiguration"

dataazurermnetworkmanagerconnectivityconfiguration.NewDataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



