# `dataAzurermSystemCenterVirtualMachineManagerInventoryItems` Submodule <a name="`dataAzurermSystemCenterVirtualMachineManagerInventoryItems` Submodule" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItems <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItems" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items azurerm_system_center_virtual_machine_manager_inventory_items}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermsystemcentervirtualmachinemanagerinventoryitems"

dataazurermsystemcentervirtualmachinemanagerinventoryitems.NewDataAzurermSystemCenterVirtualMachineManagerInventoryItems(scope Construct, id *string, config DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig) DataAzurermSystemCenterVirtualMachineManagerInventoryItems
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermSystemCenterVirtualMachineManagerInventoryItems resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermsystemcentervirtualmachinemanagerinventoryitems"

dataazurermsystemcentervirtualmachinemanagerinventoryitems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermsystemcentervirtualmachinemanagerinventoryitems"

dataazurermsystemcentervirtualmachinemanagerinventoryitems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermsystemcentervirtualmachinemanagerinventoryitems"

dataazurermsystemcentervirtualmachinemanagerinventoryitems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermsystemcentervirtualmachinemanagerinventoryitems"

dataazurermsystemcentervirtualmachinemanagerinventoryitems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermSystemCenterVirtualMachineManagerInventoryItems resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermSystemCenterVirtualMachineManagerInventoryItems to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermSystemCenterVirtualMachineManagerInventoryItems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSystemCenterVirtualMachineManagerInventoryItems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryItems">InventoryItems</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryTypeInput">InventoryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerIdInput">SystemCenterVirtualMachineManagerServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryType">InventoryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerId">SystemCenterVirtualMachineManagerServerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InventoryItems`<sup>Required</sup> <a name="InventoryItems" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryItems"></a>

```go
func InventoryItems() DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeouts"></a>

```go
func Timeouts() DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InventoryTypeInput`<sup>Optional</sup> <a name="InventoryTypeInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryTypeInput"></a>

```go
func InventoryTypeInput() *string
```

- *Type:* *string

---

##### `SystemCenterVirtualMachineManagerServerIdInput`<sup>Optional</sup> <a name="SystemCenterVirtualMachineManagerServerIdInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerIdInput"></a>

```go
func SystemCenterVirtualMachineManagerServerIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InventoryType`<sup>Required</sup> <a name="InventoryType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.inventoryType"></a>

```go
func InventoryType() *string
```

- *Type:* *string

---

##### `SystemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="SystemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.systemCenterVirtualMachineManagerServerId"></a>

```go
func SystemCenterVirtualMachineManagerServerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItems.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermsystemcentervirtualmachinemanagerinventoryitems"

&dataazurermsystemcentervirtualmachinemanagerinventoryitems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InventoryType: *string,
	SystemCenterVirtualMachineManagerServerId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.inventoryType">InventoryType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.systemCenterVirtualMachineManagerServerId">SystemCenterVirtualMachineManagerServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InventoryType`<sup>Required</sup> <a name="InventoryType" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.inventoryType"></a>

```go
InventoryType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#inventory_type DataAzurermSystemCenterVirtualMachineManagerInventoryItems#inventory_type}.

---

##### `SystemCenterVirtualMachineManagerServerId`<sup>Required</sup> <a name="SystemCenterVirtualMachineManagerServerId" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.systemCenterVirtualMachineManagerServerId"></a>

```go
SystemCenterVirtualMachineManagerServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#system_center_virtual_machine_manager_server_id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#system_center_virtual_machine_manager_server_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#id DataAzurermSystemCenterVirtualMachineManagerInventoryItems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsConfig.property.timeouts"></a>

```go
Timeouts DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#timeouts DataAzurermSystemCenterVirtualMachineManagerInventoryItems#timeouts}

---

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermsystemcentervirtualmachinemanagerinventoryitems"

&dataazurermsystemcentervirtualmachinemanagerinventoryitems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems {

}
```


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermsystemcentervirtualmachinemanagerinventoryitems"

&dataazurermsystemcentervirtualmachinemanagerinventoryitems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#read DataAzurermSystemCenterVirtualMachineManagerInventoryItems#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/system_center_virtual_machine_manager_inventory_items#read DataAzurermSystemCenterVirtualMachineManagerInventoryItems#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermsystemcentervirtualmachinemanagerinventoryitems"

dataazurermsystemcentervirtualmachinemanagerinventoryitems.NewDataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get"></a>

```go
func Get(index *f64) DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermsystemcentervirtualmachinemanagerinventoryitems"

dataazurermsystemcentervirtualmachinemanagerinventoryitems.NewDataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems">DataAzurermSystemCenterVirtualMachineManagerInventoryItemsInventoryItems</a>

---


### DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference <a name="DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermsystemcentervirtualmachinemanagerinventoryitems"

dataazurermsystemcentervirtualmachinemanagerinventoryitems.NewDataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSystemCenterVirtualMachineManagerInventoryItems.DataAzurermSystemCenterVirtualMachineManagerInventoryItemsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



