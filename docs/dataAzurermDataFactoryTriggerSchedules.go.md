# `dataAzurermDataFactoryTriggerSchedules` Submodule <a name="`dataAzurermDataFactoryTriggerSchedules` Submodule" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDataFactoryTriggerSchedules <a name="DataAzurermDataFactoryTriggerSchedules" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/data_factory_trigger_schedules azurerm_data_factory_trigger_schedules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedules"

dataazurermdatafactorytriggerschedules.NewDataAzurermDataFactoryTriggerSchedules(scope Construct, id *string, config DataAzurermDataFactoryTriggerSchedulesConfig) DataAzurermDataFactoryTriggerSchedules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig">DataAzurermDataFactoryTriggerSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig">DataAzurermDataFactoryTriggerSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermDataFactoryTriggerSchedulesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts">DataAzurermDataFactoryTriggerSchedulesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDataFactoryTriggerSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedules"

dataazurermdatafactorytriggerschedules.DataAzurermDataFactoryTriggerSchedules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedules"

dataazurermdatafactorytriggerschedules.DataAzurermDataFactoryTriggerSchedules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedules"

dataazurermdatafactorytriggerschedules.DataAzurermDataFactoryTriggerSchedules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedules"

dataazurermdatafactorytriggerschedules.DataAzurermDataFactoryTriggerSchedules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermDataFactoryTriggerSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermDataFactoryTriggerSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermDataFactoryTriggerSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/data_factory_trigger_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDataFactoryTriggerSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference">DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.timeouts"></a>

```go
func Timeouts() DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference">DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference</a>

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDataFactoryTriggerSchedulesConfig <a name="DataAzurermDataFactoryTriggerSchedulesConfig" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedules"

&dataazurermdatafactorytriggerschedules.DataAzurermDataFactoryTriggerSchedulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/data_factory_trigger_schedules#data_factory_id DataAzurermDataFactoryTriggerSchedules#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/data_factory_trigger_schedules#id DataAzurermDataFactoryTriggerSchedules#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts">DataAzurermDataFactoryTriggerSchedulesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/data_factory_trigger_schedules#data_factory_id DataAzurermDataFactoryTriggerSchedules#data_factory_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/data_factory_trigger_schedules#id DataAzurermDataFactoryTriggerSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesConfig.property.timeouts"></a>

```go
Timeouts DataAzurermDataFactoryTriggerSchedulesTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts">DataAzurermDataFactoryTriggerSchedulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/data_factory_trigger_schedules#timeouts DataAzurermDataFactoryTriggerSchedules#timeouts}

---

### DataAzurermDataFactoryTriggerSchedulesTimeouts <a name="DataAzurermDataFactoryTriggerSchedulesTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedules"

&dataazurermdatafactorytriggerschedules.DataAzurermDataFactoryTriggerSchedulesTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/data_factory_trigger_schedules#read DataAzurermDataFactoryTriggerSchedules#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/data-sources/data_factory_trigger_schedules#read DataAzurermDataFactoryTriggerSchedules#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference <a name="DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdatafactorytriggerschedules"

dataazurermdatafactorytriggerschedules.NewDataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDataFactoryTriggerSchedules.DataAzurermDataFactoryTriggerSchedulesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



