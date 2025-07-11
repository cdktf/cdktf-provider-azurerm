# `dataAzurermDevCenterAttachedNetwork` Submodule <a name="`dataAzurermDevCenterAttachedNetwork` Submodule" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDevCenterAttachedNetwork <a name="DataAzurermDevCenterAttachedNetwork" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/dev_center_attached_network azurerm_dev_center_attached_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdevcenterattachednetwork"

dataazurermdevcenterattachednetwork.NewDataAzurermDevCenterAttachedNetwork(scope Construct, id *string, config DataAzurermDevCenterAttachedNetworkConfig) DataAzurermDevCenterAttachedNetwork
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig">DataAzurermDevCenterAttachedNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig">DataAzurermDevCenterAttachedNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermDevCenterAttachedNetworkTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeouts">DataAzurermDevCenterAttachedNetworkTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDevCenterAttachedNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdevcenterattachednetwork"

dataazurermdevcenterattachednetwork.DataAzurermDevCenterAttachedNetwork_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdevcenterattachednetwork"

dataazurermdevcenterattachednetwork.DataAzurermDevCenterAttachedNetwork_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdevcenterattachednetwork"

dataazurermdevcenterattachednetwork.DataAzurermDevCenterAttachedNetwork_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdevcenterattachednetwork"

dataazurermdevcenterattachednetwork.DataAzurermDevCenterAttachedNetwork_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermDevCenterAttachedNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermDevCenterAttachedNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermDevCenterAttachedNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/dev_center_attached_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDevCenterAttachedNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.networkConnectionId">NetworkConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference">DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.devCenterIdInput">DevCenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.devCenterId">DevCenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `NetworkConnectionId`<sup>Required</sup> <a name="NetworkConnectionId" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.networkConnectionId"></a>

```go
func NetworkConnectionId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.timeouts"></a>

```go
func Timeouts() DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference">DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference</a>

---

##### `DevCenterIdInput`<sup>Optional</sup> <a name="DevCenterIdInput" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.devCenterIdInput"></a>

```go
func DevCenterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DevCenterId`<sup>Required</sup> <a name="DevCenterId" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.devCenterId"></a>

```go
func DevCenterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetwork.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDevCenterAttachedNetworkConfig <a name="DataAzurermDevCenterAttachedNetworkConfig" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdevcenterattachednetwork"

&dataazurermdevcenterattachednetwork.DataAzurermDevCenterAttachedNetworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DevCenterId: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.devCenterId">DevCenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/dev_center_attached_network#dev_center_id DataAzurermDevCenterAttachedNetwork#dev_center_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/dev_center_attached_network#name DataAzurermDevCenterAttachedNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/dev_center_attached_network#id DataAzurermDevCenterAttachedNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeouts">DataAzurermDevCenterAttachedNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DevCenterId`<sup>Required</sup> <a name="DevCenterId" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.devCenterId"></a>

```go
DevCenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/dev_center_attached_network#dev_center_id DataAzurermDevCenterAttachedNetwork#dev_center_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/dev_center_attached_network#name DataAzurermDevCenterAttachedNetwork#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/dev_center_attached_network#id DataAzurermDevCenterAttachedNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkConfig.property.timeouts"></a>

```go
Timeouts DataAzurermDevCenterAttachedNetworkTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeouts">DataAzurermDevCenterAttachedNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/dev_center_attached_network#timeouts DataAzurermDevCenterAttachedNetwork#timeouts}

---

### DataAzurermDevCenterAttachedNetworkTimeouts <a name="DataAzurermDevCenterAttachedNetworkTimeouts" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdevcenterattachednetwork"

&dataazurermdevcenterattachednetwork.DataAzurermDevCenterAttachedNetworkTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/dev_center_attached_network#read DataAzurermDevCenterAttachedNetwork#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/dev_center_attached_network#read DataAzurermDevCenterAttachedNetwork#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference <a name="DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdevcenterattachednetwork"

dataazurermdevcenterattachednetwork.NewDataAzurermDevCenterAttachedNetworkTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDevCenterAttachedNetwork.DataAzurermDevCenterAttachedNetworkTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



