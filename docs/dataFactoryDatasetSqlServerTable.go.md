# `dataFactoryDatasetSqlServerTable` Submodule <a name="`dataFactoryDatasetSqlServerTable` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetSqlServerTable <a name="DataFactoryDatasetSqlServerTable" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table azurerm_data_factory_dataset_sql_server_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorydatasetsqlservertable"

datafactorydatasetsqlservertable.NewDataFactoryDatasetSqlServerTable(scope Construct, id *string, config DataFactoryDatasetSqlServerTableConfig) DataFactoryDatasetSqlServerTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig">DataFactoryDatasetSqlServerTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig">DataFactoryDatasetSqlServerTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.putSchemaColumn">PutSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetSchemaColumn">ResetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchemaColumn` <a name="PutSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.putSchemaColumn"></a>

```go
func PutSchemaColumn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.putSchemaColumn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryDatasetSqlServerTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts">DataFactoryDatasetSqlServerTableTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetId"></a>

```go
func ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSchemaColumn` <a name="ResetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetSchemaColumn"></a>

```go
func ResetSchemaColumn()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryDatasetSqlServerTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorydatasetsqlservertable"

datafactorydatasetsqlservertable.DataFactoryDatasetSqlServerTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorydatasetsqlservertable"

datafactorydatasetsqlservertable.DataFactoryDatasetSqlServerTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorydatasetsqlservertable"

datafactorydatasetsqlservertable.DataFactoryDatasetSqlServerTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorydatasetsqlservertable"

datafactorydatasetsqlservertable.DataFactoryDatasetSqlServerTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataFactoryDatasetSqlServerTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryDatasetSqlServerTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryDatasetSqlServerTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetSqlServerTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.schemaColumn">SchemaColumn</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList">DataFactoryDatasetSqlServerTableSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference">DataFactoryDatasetSqlServerTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.schemaColumnInput">SchemaColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SchemaColumn`<sup>Required</sup> <a name="SchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.schemaColumn"></a>

```go
func SchemaColumn() DataFactoryDatasetSqlServerTableSchemaColumnList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList">DataFactoryDatasetSqlServerTableSchemaColumnList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.timeouts"></a>

```go
func Timeouts() DataFactoryDatasetSqlServerTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference">DataFactoryDatasetSqlServerTableTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SchemaColumnInput`<sup>Optional</sup> <a name="SchemaColumnInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.schemaColumnInput"></a>

```go
func SchemaColumnInput() interface{}
```

- *Type:* interface{}

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.additionalProperties"></a>

```go
func AdditionalProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetSqlServerTableConfig <a name="DataFactoryDatasetSqlServerTableConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorydatasetsqlservertable"

&datafactorydatasetsqlservertable.DataFactoryDatasetSqlServerTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	LinkedServiceName: *string,
	Name: *string,
	AdditionalProperties: *map[string]*string,
	Annotations: *[]*string,
	Description: *string,
	Folder: *string,
	Id: *string,
	Parameters: *map[string]*string,
	SchemaColumn: interface{},
	TableName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#data_factory_id DataFactoryDatasetSqlServerTable#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#linked_service_name DataFactoryDatasetSqlServerTable#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#name DataFactoryDatasetSqlServerTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#additional_properties DataFactoryDatasetSqlServerTable#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#annotations DataFactoryDatasetSqlServerTable#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#description DataFactoryDatasetSqlServerTable#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.folder">Folder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#folder DataFactoryDatasetSqlServerTable#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#id DataFactoryDatasetSqlServerTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#parameters DataFactoryDatasetSqlServerTable#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.schemaColumn">SchemaColumn</a></code> | <code>interface{}</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#table_name DataFactoryDatasetSqlServerTable#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts">DataFactoryDatasetSqlServerTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#data_factory_id DataFactoryDatasetSqlServerTable#data_factory_id}.

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#linked_service_name DataFactoryDatasetSqlServerTable#linked_service_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#name DataFactoryDatasetSqlServerTable#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.additionalProperties"></a>

```go
AdditionalProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#additional_properties DataFactoryDatasetSqlServerTable#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#annotations DataFactoryDatasetSqlServerTable#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#description DataFactoryDatasetSqlServerTable#description}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#folder DataFactoryDatasetSqlServerTable#folder}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#id DataFactoryDatasetSqlServerTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#parameters DataFactoryDatasetSqlServerTable#parameters}.

---

##### `SchemaColumn`<sup>Optional</sup> <a name="SchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.schemaColumn"></a>

```go
SchemaColumn interface{}
```

- *Type:* interface{}

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#schema_column DataFactoryDatasetSqlServerTable#schema_column}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#table_name DataFactoryDatasetSqlServerTable#table_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableConfig.property.timeouts"></a>

```go
Timeouts DataFactoryDatasetSqlServerTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts">DataFactoryDatasetSqlServerTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#timeouts DataFactoryDatasetSqlServerTable#timeouts}

---

### DataFactoryDatasetSqlServerTableSchemaColumn <a name="DataFactoryDatasetSqlServerTableSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorydatasetsqlservertable"

&datafactorydatasetsqlservertable.DataFactoryDatasetSqlServerTableSchemaColumn {
	Name: *string,
	Description: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#name DataFactoryDatasetSqlServerTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumn.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#description DataFactoryDatasetSqlServerTable#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumn.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#type DataFactoryDatasetSqlServerTable#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#name DataFactoryDatasetSqlServerTable#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumn.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#description DataFactoryDatasetSqlServerTable#description}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumn.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#type DataFactoryDatasetSqlServerTable#type}.

---

### DataFactoryDatasetSqlServerTableTimeouts <a name="DataFactoryDatasetSqlServerTableTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorydatasetsqlservertable"

&datafactorydatasetsqlservertable.DataFactoryDatasetSqlServerTableTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#create DataFactoryDatasetSqlServerTable#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#delete DataFactoryDatasetSqlServerTable#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#read DataFactoryDatasetSqlServerTable#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#update DataFactoryDatasetSqlServerTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#create DataFactoryDatasetSqlServerTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#delete DataFactoryDatasetSqlServerTable#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#read DataFactoryDatasetSqlServerTable#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.4.0/docs/resources/data_factory_dataset_sql_server_table#update DataFactoryDatasetSqlServerTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetSqlServerTableSchemaColumnList <a name="DataFactoryDatasetSqlServerTableSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorydatasetsqlservertable"

datafactorydatasetsqlservertable.NewDataFactoryDatasetSqlServerTableSchemaColumnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataFactoryDatasetSqlServerTableSchemaColumnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.get"></a>

```go
func Get(index *f64) DataFactoryDatasetSqlServerTableSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDatasetSqlServerTableSchemaColumnOutputReference <a name="DataFactoryDatasetSqlServerTableSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorydatasetsqlservertable"

datafactorydatasetsqlservertable.NewDataFactoryDatasetSqlServerTableSchemaColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataFactoryDatasetSqlServerTableSchemaColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableSchemaColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDatasetSqlServerTableTimeoutsOutputReference <a name="DataFactoryDatasetSqlServerTableTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorydatasetsqlservertable"

datafactorydatasetsqlservertable.NewDataFactoryDatasetSqlServerTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDatasetSqlServerTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetSqlServerTable.DataFactoryDatasetSqlServerTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



