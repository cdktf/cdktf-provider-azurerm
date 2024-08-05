# `dataShareDatasetKustoDatabase` Submodule <a name="`dataShareDatasetKustoDatabase` Submodule" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataShareDatasetKustoDatabase <a name="DataShareDatasetKustoDatabase" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database azurerm_data_share_dataset_kusto_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetkustodatabase"

datasharedatasetkustodatabase.NewDataShareDatasetKustoDatabase(scope Construct, id *string, config DataShareDatasetKustoDatabaseConfig) DataShareDatasetKustoDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig">DataShareDatasetKustoDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig">DataShareDatasetKustoDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.putTimeouts"></a>

```go
func PutTimeouts(value DataShareDatasetKustoDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts">DataShareDatasetKustoDatabaseTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataShareDatasetKustoDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetkustodatabase"

datasharedatasetkustodatabase.DataShareDatasetKustoDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetkustodatabase"

datasharedatasetkustodatabase.DataShareDatasetKustoDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetkustodatabase"

datasharedatasetkustodatabase.DataShareDatasetKustoDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetkustodatabase"

datasharedatasetkustodatabase.DataShareDatasetKustoDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataShareDatasetKustoDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataShareDatasetKustoDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataShareDatasetKustoDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataShareDatasetKustoDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoClusterLocation">KustoClusterLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference">DataShareDatasetKustoDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoDatabaseIdInput">KustoDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.shareIdInput">ShareIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoDatabaseId">KustoDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.shareId">ShareId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `KustoClusterLocation`<sup>Required</sup> <a name="KustoClusterLocation" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoClusterLocation"></a>

```go
func KustoClusterLocation() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.timeouts"></a>

```go
func Timeouts() DataShareDatasetKustoDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference">DataShareDatasetKustoDatabaseTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KustoDatabaseIdInput`<sup>Optional</sup> <a name="KustoDatabaseIdInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoDatabaseIdInput"></a>

```go
func KustoDatabaseIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ShareIdInput`<sup>Optional</sup> <a name="ShareIdInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.shareIdInput"></a>

```go
func ShareIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KustoDatabaseId`<sup>Required</sup> <a name="KustoDatabaseId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.kustoDatabaseId"></a>

```go
func KustoDatabaseId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.shareId"></a>

```go
func ShareId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataShareDatasetKustoDatabaseConfig <a name="DataShareDatasetKustoDatabaseConfig" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetkustodatabase"

&datasharedatasetkustodatabase.DataShareDatasetKustoDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KustoDatabaseId: *string,
	Name: *string,
	ShareId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.kustoDatabaseId">KustoDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#kusto_database_id DataShareDatasetKustoDatabase#kusto_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#name DataShareDatasetKustoDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.shareId">ShareId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#share_id DataShareDatasetKustoDatabase#share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#id DataShareDatasetKustoDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts">DataShareDatasetKustoDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KustoDatabaseId`<sup>Required</sup> <a name="KustoDatabaseId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.kustoDatabaseId"></a>

```go
KustoDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#kusto_database_id DataShareDatasetKustoDatabase#kusto_database_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#name DataShareDatasetKustoDatabase#name}.

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.shareId"></a>

```go
ShareId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#share_id DataShareDatasetKustoDatabase#share_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#id DataShareDatasetKustoDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseConfig.property.timeouts"></a>

```go
Timeouts DataShareDatasetKustoDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts">DataShareDatasetKustoDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#timeouts DataShareDatasetKustoDatabase#timeouts}

---

### DataShareDatasetKustoDatabaseTimeouts <a name="DataShareDatasetKustoDatabaseTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetkustodatabase"

&datasharedatasetkustodatabase.DataShareDatasetKustoDatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#create DataShareDatasetKustoDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#delete DataShareDatasetKustoDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#read DataShareDatasetKustoDatabase#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#create DataShareDatasetKustoDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#delete DataShareDatasetKustoDatabase#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/data_share_dataset_kusto_database#read DataShareDatasetKustoDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataShareDatasetKustoDatabaseTimeoutsOutputReference <a name="DataShareDatasetKustoDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetkustodatabase"

datasharedatasetkustodatabase.NewDataShareDatasetKustoDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataShareDatasetKustoDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataShareDatasetKustoDatabase.DataShareDatasetKustoDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



