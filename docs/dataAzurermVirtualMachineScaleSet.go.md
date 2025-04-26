# `dataAzurermVirtualMachineScaleSet` Submodule <a name="`dataAzurermVirtualMachineScaleSet` Submodule" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVirtualMachineScaleSet <a name="DataAzurermVirtualMachineScaleSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/virtual_machine_scale_set azurerm_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSet(scope Construct, id *string, config DataAzurermVirtualMachineScaleSetConfig) DataAzurermVirtualMachineScaleSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig">DataAzurermVirtualMachineScaleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig">DataAzurermVirtualMachineScaleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermVirtualMachineScaleSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeouts">DataAzurermVirtualMachineScaleSetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermVirtualMachineScaleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermVirtualMachineScaleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVirtualMachineScaleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList">DataAzurermVirtualMachineScaleSetIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.instances">Instances</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList">DataAzurermVirtualMachineScaleSetInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList">DataAzurermVirtualMachineScaleSetNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference">DataAzurermVirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.identity"></a>

```go
func Identity() DataAzurermVirtualMachineScaleSetIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList">DataAzurermVirtualMachineScaleSetIdentityList</a>

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.instances"></a>

```go
func Instances() DataAzurermVirtualMachineScaleSetInstancesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList">DataAzurermVirtualMachineScaleSetInstancesList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.networkInterface"></a>

```go
func NetworkInterface() DataAzurermVirtualMachineScaleSetNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList">DataAzurermVirtualMachineScaleSetNetworkInterfaceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.timeouts"></a>

```go
func Timeouts() DataAzurermVirtualMachineScaleSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference">DataAzurermVirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVirtualMachineScaleSetConfig <a name="DataAzurermVirtualMachineScaleSetConfig" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

&dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/virtual_machine_scale_set#name DataAzurermVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/virtual_machine_scale_set#resource_group_name DataAzurermVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/virtual_machine_scale_set#id DataAzurermVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeouts">DataAzurermVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/virtual_machine_scale_set#name DataAzurermVirtualMachineScaleSet#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/virtual_machine_scale_set#resource_group_name DataAzurermVirtualMachineScaleSet#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/virtual_machine_scale_set#id DataAzurermVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetConfig.property.timeouts"></a>

```go
Timeouts DataAzurermVirtualMachineScaleSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeouts">DataAzurermVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/virtual_machine_scale_set#timeouts DataAzurermVirtualMachineScaleSet#timeouts}

---

### DataAzurermVirtualMachineScaleSetIdentity <a name="DataAzurermVirtualMachineScaleSetIdentity" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

&dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSetIdentity {

}
```


### DataAzurermVirtualMachineScaleSetInstances <a name="DataAzurermVirtualMachineScaleSetInstances" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

&dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSetInstances {

}
```


### DataAzurermVirtualMachineScaleSetNetworkInterface <a name="DataAzurermVirtualMachineScaleSetNetworkInterface" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

&dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSetNetworkInterface {

}
```


### DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfiguration <a name="DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfiguration" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

&dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfiguration {

}
```


### DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress <a name="DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

&dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {

}
```


### DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag <a name="DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

&dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {

}
```


### DataAzurermVirtualMachineScaleSetTimeouts <a name="DataAzurermVirtualMachineScaleSetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

&dataazurermvirtualmachinescaleset.DataAzurermVirtualMachineScaleSetTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/virtual_machine_scale_set#read DataAzurermVirtualMachineScaleSet#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/virtual_machine_scale_set#read DataAzurermVirtualMachineScaleSet#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVirtualMachineScaleSetIdentityList <a name="DataAzurermVirtualMachineScaleSetIdentityList" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVirtualMachineScaleSetIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermVirtualMachineScaleSetIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVirtualMachineScaleSetIdentityOutputReference <a name="DataAzurermVirtualMachineScaleSetIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVirtualMachineScaleSetIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentity">DataAzurermVirtualMachineScaleSetIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetIdentity">DataAzurermVirtualMachineScaleSetIdentity</a>

---


### DataAzurermVirtualMachineScaleSetInstancesList <a name="DataAzurermVirtualMachineScaleSetInstancesList" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVirtualMachineScaleSetInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.get"></a>

```go
func Get(index *f64) DataAzurermVirtualMachineScaleSetInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVirtualMachineScaleSetInstancesOutputReference <a name="DataAzurermVirtualMachineScaleSetInstancesOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVirtualMachineScaleSetInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.computerName">ComputerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.latestModelApplied">LatestModelApplied</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.powerState">PowerState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.publicIpAddresses">PublicIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstances">DataAzurermVirtualMachineScaleSetInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.computerName"></a>

```go
func ComputerName() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `LatestModelApplied`<sup>Required</sup> <a name="LatestModelApplied" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.latestModelApplied"></a>

```go
func LatestModelApplied() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PowerState`<sup>Required</sup> <a name="PowerState" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.powerState"></a>

```go
func PowerState() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.privateIpAddresses"></a>

```go
func PrivateIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.publicIpAddress"></a>

```go
func PublicIpAddress() *string
```

- *Type:* *string

---

##### `PublicIpAddresses`<sup>Required</sup> <a name="PublicIpAddresses" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.publicIpAddresses"></a>

```go
func PublicIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.virtualMachineId"></a>

```go
func VirtualMachineId() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVirtualMachineScaleSetInstances
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetInstances">DataAzurermVirtualMachineScaleSetInstances</a>

---


### DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList <a name="DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get"></a>

```go
func Get(index *f64) DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference <a name="DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds">ApplicationGatewayBackendAddressPoolIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds">LoadBalancerBackendAddressPoolIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">LoadBalancerInboundNatRulesIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary">Primary</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfiguration">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationGatewayBackendAddressPoolIds`<sup>Required</sup> <a name="ApplicationGatewayBackendAddressPoolIds" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds"></a>

```go
func ApplicationGatewayBackendAddressPoolIds() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationSecurityGroupIds`<sup>Required</sup> <a name="ApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds"></a>

```go
func ApplicationSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerBackendAddressPoolIds`<sup>Required</sup> <a name="LoadBalancerBackendAddressPoolIds" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds"></a>

```go
func LoadBalancerBackendAddressPoolIds() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerInboundNatRulesIds`<sup>Required</sup> <a name="LoadBalancerInboundNatRulesIds" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```go
func LoadBalancerInboundNatRulesIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```go
func Primary() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress"></a>

```go
func PublicIpAddress() DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfiguration">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>

---


### DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList <a name="DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get"></a>

```go
func Get(index *f64) DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference <a name="DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>

---


### DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList <a name="DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get"></a>

```go
func Get(index *f64) DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference <a name="DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel">DomainNameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag">IpTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId">PublicIpPrefixId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainNameLabel`<sup>Required</sup> <a name="DomainNameLabel" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel"></a>

```go
func DomainNameLabel() *string
```

- *Type:* *string

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes"></a>

```go
func IdleTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `IpTag`<sup>Required</sup> <a name="IpTag" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag"></a>

```go
func IpTag() DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicIpPrefixId`<sup>Required</sup> <a name="PublicIpPrefixId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId"></a>

```go
func PublicIpPrefixId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>

---


### DataAzurermVirtualMachineScaleSetNetworkInterfaceList <a name="DataAzurermVirtualMachineScaleSetNetworkInterfaceList" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVirtualMachineScaleSetNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.get"></a>

```go
func Get(index *f64) DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference <a name="DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworking">EnableAcceleratedNetworking</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary">Primary</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterface">DataAzurermVirtualMachineScaleSetNetworkInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers"></a>

```go
func DnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `EnableAcceleratedNetworking`<sup>Required</sup> <a name="EnableAcceleratedNetworking" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworking"></a>

```go
func EnableAcceleratedNetworking() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableIpForwarding`<sup>Required</sup> <a name="EnableIpForwarding" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding"></a>

```go
func EnableIpForwarding() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration"></a>

```go
func IpConfiguration() DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId"></a>

```go
func NetworkSecurityGroupId() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary"></a>

```go
func Primary() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVirtualMachineScaleSetNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetNetworkInterface">DataAzurermVirtualMachineScaleSetNetworkInterface</a>

---


### DataAzurermVirtualMachineScaleSetTimeoutsOutputReference <a name="DataAzurermVirtualMachineScaleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermvirtualmachinescaleset"

dataazurermvirtualmachinescaleset.NewDataAzurermVirtualMachineScaleSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermVirtualMachineScaleSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualMachineScaleSet.DataAzurermVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



