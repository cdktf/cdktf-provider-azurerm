# `dataFactoryPipeline` Submodule <a name="`dataFactoryPipeline` Submodule" id="@cdktf/provider-azurerm.dataFactoryPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryPipeline <a name="DataFactoryPipeline" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline azurerm_data_factory_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorypipeline"

datafactorypipeline.NewDataFactoryPipeline(scope Construct, id *string, config DataFactoryPipelineConfig) DataFactoryPipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig">DataFactoryPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig">DataFactoryPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetActivitiesJson">ResetActivitiesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetConcurrency">ResetConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetMoniterMetricsAfterDuration">ResetMoniterMetricsAfterDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryPipelineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts">DataFactoryPipelineTimeouts</a>

---

##### `ResetActivitiesJson` <a name="ResetActivitiesJson" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetActivitiesJson"></a>

```go
func ResetActivitiesJson()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetConcurrency` <a name="ResetConcurrency" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetConcurrency"></a>

```go
func ResetConcurrency()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetId"></a>

```go
func ResetId()
```

##### `ResetMoniterMetricsAfterDuration` <a name="ResetMoniterMetricsAfterDuration" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetMoniterMetricsAfterDuration"></a>

```go
func ResetMoniterMetricsAfterDuration()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.resetVariables"></a>

```go
func ResetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorypipeline"

datafactorypipeline.DataFactoryPipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorypipeline"

datafactorypipeline.DataFactoryPipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorypipeline"

datafactorypipeline.DataFactoryPipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorypipeline"

datafactorypipeline.DataFactoryPipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataFactoryPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference">DataFactoryPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.activitiesJsonInput">ActivitiesJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.concurrencyInput">ConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.moniterMetricsAfterDurationInput">MoniterMetricsAfterDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.variablesInput">VariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.activitiesJson">ActivitiesJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.concurrency">Concurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.moniterMetricsAfterDuration">MoniterMetricsAfterDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.variables">Variables</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.timeouts"></a>

```go
func Timeouts() DataFactoryPipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference">DataFactoryPipelineTimeoutsOutputReference</a>

---

##### `ActivitiesJsonInput`<sup>Optional</sup> <a name="ActivitiesJsonInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.activitiesJsonInput"></a>

```go
func ActivitiesJsonInput() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConcurrencyInput`<sup>Optional</sup> <a name="ConcurrencyInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.concurrencyInput"></a>

```go
func ConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MoniterMetricsAfterDurationInput`<sup>Optional</sup> <a name="MoniterMetricsAfterDurationInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.moniterMetricsAfterDurationInput"></a>

```go
func MoniterMetricsAfterDurationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.variablesInput"></a>

```go
func VariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ActivitiesJson`<sup>Required</sup> <a name="ActivitiesJson" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.activitiesJson"></a>

```go
func ActivitiesJson() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `Concurrency`<sup>Required</sup> <a name="Concurrency" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.concurrency"></a>

```go
func Concurrency() *f64
```

- *Type:* *f64

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MoniterMetricsAfterDuration`<sup>Required</sup> <a name="MoniterMetricsAfterDuration" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.moniterMetricsAfterDuration"></a>

```go
func MoniterMetricsAfterDuration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.variables"></a>

```go
func Variables() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryPipelineConfig <a name="DataFactoryPipelineConfig" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorypipeline"

&datafactorypipeline.DataFactoryPipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Name: *string,
	ActivitiesJson: *string,
	Annotations: *[]*string,
	Concurrency: *f64,
	Description: *string,
	Folder: *string,
	Id: *string,
	MoniterMetricsAfterDuration: *string,
	Parameters: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dataFactoryPipeline.DataFactoryPipelineTimeouts,
	Variables: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#data_factory_id DataFactoryPipeline#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#name DataFactoryPipeline#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.activitiesJson">ActivitiesJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#activities_json DataFactoryPipeline#activities_json}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#annotations DataFactoryPipeline#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.concurrency">Concurrency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#concurrency DataFactoryPipeline#concurrency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#description DataFactoryPipeline#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.folder">Folder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#folder DataFactoryPipeline#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#id DataFactoryPipeline#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.moniterMetricsAfterDuration">MoniterMetricsAfterDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#moniter_metrics_after_duration DataFactoryPipeline#moniter_metrics_after_duration}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#parameters DataFactoryPipeline#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts">DataFactoryPipelineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.variables">Variables</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#variables DataFactoryPipeline#variables}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#data_factory_id DataFactoryPipeline#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#name DataFactoryPipeline#name}.

---

##### `ActivitiesJson`<sup>Optional</sup> <a name="ActivitiesJson" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.activitiesJson"></a>

```go
ActivitiesJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#activities_json DataFactoryPipeline#activities_json}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#annotations DataFactoryPipeline#annotations}.

---

##### `Concurrency`<sup>Optional</sup> <a name="Concurrency" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.concurrency"></a>

```go
Concurrency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#concurrency DataFactoryPipeline#concurrency}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#description DataFactoryPipeline#description}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#folder DataFactoryPipeline#folder}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#id DataFactoryPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MoniterMetricsAfterDuration`<sup>Optional</sup> <a name="MoniterMetricsAfterDuration" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.moniterMetricsAfterDuration"></a>

```go
MoniterMetricsAfterDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#moniter_metrics_after_duration DataFactoryPipeline#moniter_metrics_after_duration}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#parameters DataFactoryPipeline#parameters}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.timeouts"></a>

```go
Timeouts DataFactoryPipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts">DataFactoryPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#timeouts DataFactoryPipeline#timeouts}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineConfig.property.variables"></a>

```go
Variables *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#variables DataFactoryPipeline#variables}.

---

### DataFactoryPipelineTimeouts <a name="DataFactoryPipelineTimeouts" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorypipeline"

&datafactorypipeline.DataFactoryPipelineTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#create DataFactoryPipeline#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#delete DataFactoryPipeline#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#read DataFactoryPipeline#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#update DataFactoryPipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#create DataFactoryPipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#delete DataFactoryPipeline#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#read DataFactoryPipeline#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_pipeline#update DataFactoryPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryPipelineTimeoutsOutputReference <a name="DataFactoryPipelineTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorypipeline"

datafactorypipeline.NewDataFactoryPipelineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryPipelineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryPipeline.DataFactoryPipelineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



