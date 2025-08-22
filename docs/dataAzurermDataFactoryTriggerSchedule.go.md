# `dataAzurermDataFactoryTriggerSchedule` Submodule <a name="`dataAzurermDataFactoryTriggerSchedule` Submodule" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDataFactoryTriggerSchedule <a name="DataAzurermDataFactoryTriggerSchedule" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/data_factory_trigger_schedule azurerm_data_factory_trigger_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

dataazurermdatafactorytriggerschedule.NewDataAzurermDataFactoryTriggerSchedule(scope Construct, id *string, config DataAzurermDataFactoryTriggerScheduleConfig) DataAzurermDataFactoryTriggerSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig">DataAzurermDataFactoryTriggerScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig">DataAzurermDataFactoryTriggerScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermDataFactoryTriggerScheduleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts">DataAzurermDataFactoryTriggerScheduleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDataFactoryTriggerSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

dataazurermdatafactorytriggerschedule.DataAzurermDataFactoryTriggerSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

dataazurermdatafactorytriggerschedule.DataAzurermDataFactoryTriggerSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

dataazurermdatafactorytriggerschedule.DataAzurermDataFactoryTriggerSchedule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

dataazurermdatafactorytriggerschedule.DataAzurermDataFactoryTriggerSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermDataFactoryTriggerSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermDataFactoryTriggerSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermDataFactoryTriggerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/data_factory_trigger_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDataFactoryTriggerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.activated">Activated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.pipelineName">PipelineName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList">DataAzurermDataFactoryTriggerScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference">DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Activated`<sup>Required</sup> <a name="Activated" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.activated"></a>

```go
func Activated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.pipelineName"></a>

```go
func PipelineName() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.schedule"></a>

```go
func Schedule() DataAzurermDataFactoryTriggerScheduleScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList">DataAzurermDataFactoryTriggerScheduleScheduleList</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeouts"></a>

```go
func Timeouts() DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference">DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDataFactoryTriggerScheduleConfig <a name="DataAzurermDataFactoryTriggerScheduleConfig" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

&dataazurermdatafactorytriggerschedule.DataAzurermDataFactoryTriggerScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/data_factory_trigger_schedule#data_factory_id DataAzurermDataFactoryTriggerSchedule#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/data_factory_trigger_schedule#name DataAzurermDataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/data_factory_trigger_schedule#id DataAzurermDataFactoryTriggerSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts">DataAzurermDataFactoryTriggerScheduleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/data_factory_trigger_schedule#data_factory_id DataAzurermDataFactoryTriggerSchedule#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/data_factory_trigger_schedule#name DataAzurermDataFactoryTriggerSchedule#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/data_factory_trigger_schedule#id DataAzurermDataFactoryTriggerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleConfig.property.timeouts"></a>

```go
Timeouts DataAzurermDataFactoryTriggerScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts">DataAzurermDataFactoryTriggerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/data_factory_trigger_schedule#timeouts DataAzurermDataFactoryTriggerSchedule#timeouts}

---

### DataAzurermDataFactoryTriggerScheduleSchedule <a name="DataAzurermDataFactoryTriggerScheduleSchedule" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

&dataazurermdatafactorytriggerschedule.DataAzurermDataFactoryTriggerScheduleSchedule {

}
```


### DataAzurermDataFactoryTriggerScheduleScheduleMonthly <a name="DataAzurermDataFactoryTriggerScheduleScheduleMonthly" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

&dataazurermdatafactorytriggerschedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthly {

}
```


### DataAzurermDataFactoryTriggerScheduleTimeouts <a name="DataAzurermDataFactoryTriggerScheduleTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

&dataazurermdatafactorytriggerschedule.DataAzurermDataFactoryTriggerScheduleTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/data_factory_trigger_schedule#read DataAzurermDataFactoryTriggerSchedule#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/data_factory_trigger_schedule#read DataAzurermDataFactoryTriggerSchedule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDataFactoryTriggerScheduleScheduleList <a name="DataAzurermDataFactoryTriggerScheduleScheduleList" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

dataazurermdatafactorytriggerschedule.NewDataAzurermDataFactoryTriggerScheduleScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermDataFactoryTriggerScheduleScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermDataFactoryTriggerScheduleScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList <a name="DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

dataazurermdatafactorytriggerschedule.NewDataAzurermDataFactoryTriggerScheduleScheduleMonthlyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.get"></a>

```go
func Get(index *f64) DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference <a name="DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

dataazurermdatafactorytriggerschedule.NewDataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week">Week</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday">Weekday</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthly">DataAzurermDataFactoryTriggerScheduleScheduleMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Week`<sup>Required</sup> <a name="Week" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week"></a>

```go
func Week() *f64
```

- *Type:* *f64

---

##### `Weekday`<sup>Required</sup> <a name="Weekday" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday"></a>

```go
func Weekday() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermDataFactoryTriggerScheduleScheduleMonthly
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthly">DataAzurermDataFactoryTriggerScheduleScheduleMonthly</a>

---


### DataAzurermDataFactoryTriggerScheduleScheduleOutputReference <a name="DataAzurermDataFactoryTriggerScheduleScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

dataazurermdatafactorytriggerschedule.NewDataAzurermDataFactoryTriggerScheduleScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermDataFactoryTriggerScheduleScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.hours">Hours</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.minutes">Minutes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList">DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleSchedule">DataAzurermDataFactoryTriggerScheduleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth"></a>

```go
func DaysOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.hours"></a>

```go
func Hours() *[]*f64
```

- *Type:* *[]*f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.minutes"></a>

```go
func Minutes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.monthly"></a>

```go
func Monthly() DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList">DataAzurermDataFactoryTriggerScheduleScheduleMonthlyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermDataFactoryTriggerScheduleSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleSchedule">DataAzurermDataFactoryTriggerScheduleSchedule</a>

---


### DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference <a name="DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedule"

dataazurermdatafactorytriggerschedule.NewDataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedule.DataAzurermDataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



