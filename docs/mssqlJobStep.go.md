# `mssqlJobStep` Submodule <a name="`mssqlJobStep` Submodule" id="@cdktf/provider-azurerm.mssqlJobStep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlJobStep <a name="MssqlJobStep" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step azurerm_mssql_job_step}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqljobstep"

mssqljobstep.NewMssqlJobStep(scope Construct, id *string, config MssqlJobStepConfig) MssqlJobStep
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig">MssqlJobStepConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig">MssqlJobStepConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget">PutOutputTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetInitialRetryIntervalSeconds">ResetInitialRetryIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetMaximumRetryIntervalSeconds">ResetMaximumRetryIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOutputTarget">ResetOutputTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryAttempts">ResetRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryIntervalBackoffMultiplier">ResetRetryIntervalBackoffMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOutputTarget` <a name="PutOutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget"></a>

```go
func PutOutputTarget(value MssqlJobStepOutputTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putOutputTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts"></a>

```go
func PutTimeouts(value MssqlJobStepTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialRetryIntervalSeconds` <a name="ResetInitialRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetInitialRetryIntervalSeconds"></a>

```go
func ResetInitialRetryIntervalSeconds()
```

##### `ResetMaximumRetryIntervalSeconds` <a name="ResetMaximumRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetMaximumRetryIntervalSeconds"></a>

```go
func ResetMaximumRetryIntervalSeconds()
```

##### `ResetOutputTarget` <a name="ResetOutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetOutputTarget"></a>

```go
func ResetOutputTarget()
```

##### `ResetRetryAttempts` <a name="ResetRetryAttempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryAttempts"></a>

```go
func ResetRetryAttempts()
```

##### `ResetRetryIntervalBackoffMultiplier` <a name="ResetRetryIntervalBackoffMultiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetRetryIntervalBackoffMultiplier"></a>

```go
func ResetRetryIntervalBackoffMultiplier()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlJobStep resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqljobstep"

mssqljobstep.MssqlJobStep_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqljobstep"

mssqljobstep.MssqlJobStep_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqljobstep"

mssqljobstep.MssqlJobStep_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqljobstep"

mssqljobstep.MssqlJobStep_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MssqlJobStep resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MssqlJobStep to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MssqlJobStep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MssqlJobStep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTarget">OutputTarget</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference">MssqlJobStepOutputTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference">MssqlJobStepTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSecondsInput">InitialRetryIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialIdInput">JobCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobIdInput">JobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndexInput">JobStepIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupIdInput">JobTargetGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSecondsInput">MaximumRetryIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTargetInput">OutputTargetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttemptsInput">RetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplierInput">RetryIntervalBackoffMultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScriptInput">SqlScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSeconds">InitialRetryIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialId">JobCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndex">JobStepIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupId">JobTargetGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSeconds">MaximumRetryIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttempts">RetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplier">RetryIntervalBackoffMultiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScript">SqlScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OutputTarget`<sup>Required</sup> <a name="OutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTarget"></a>

```go
func OutputTarget() MssqlJobStepOutputTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference">MssqlJobStepOutputTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeouts"></a>

```go
func Timeouts() MssqlJobStepTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference">MssqlJobStepTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialRetryIntervalSecondsInput`<sup>Optional</sup> <a name="InitialRetryIntervalSecondsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSecondsInput"></a>

```go
func InitialRetryIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `JobCredentialIdInput`<sup>Optional</sup> <a name="JobCredentialIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialIdInput"></a>

```go
func JobCredentialIdInput() *string
```

- *Type:* *string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobIdInput"></a>

```go
func JobIdInput() *string
```

- *Type:* *string

---

##### `JobStepIndexInput`<sup>Optional</sup> <a name="JobStepIndexInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndexInput"></a>

```go
func JobStepIndexInput() *f64
```

- *Type:* *f64

---

##### `JobTargetGroupIdInput`<sup>Optional</sup> <a name="JobTargetGroupIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupIdInput"></a>

```go
func JobTargetGroupIdInput() *string
```

- *Type:* *string

---

##### `MaximumRetryIntervalSecondsInput`<sup>Optional</sup> <a name="MaximumRetryIntervalSecondsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSecondsInput"></a>

```go
func MaximumRetryIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputTargetInput`<sup>Optional</sup> <a name="OutputTargetInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.outputTargetInput"></a>

```go
func OutputTargetInput() MssqlJobStepOutputTarget
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

---

##### `RetryAttemptsInput`<sup>Optional</sup> <a name="RetryAttemptsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttemptsInput"></a>

```go
func RetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `RetryIntervalBackoffMultiplierInput`<sup>Optional</sup> <a name="RetryIntervalBackoffMultiplierInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplierInput"></a>

```go
func RetryIntervalBackoffMultiplierInput() *f64
```

- *Type:* *f64

---

##### `SqlScriptInput`<sup>Optional</sup> <a name="SqlScriptInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScriptInput"></a>

```go
func SqlScriptInput() *string
```

- *Type:* *string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialRetryIntervalSeconds`<sup>Required</sup> <a name="InitialRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.initialRetryIntervalSeconds"></a>

```go
func InitialRetryIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `JobCredentialId`<sup>Required</sup> <a name="JobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobCredentialId"></a>

```go
func JobCredentialId() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `JobStepIndex`<sup>Required</sup> <a name="JobStepIndex" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobStepIndex"></a>

```go
func JobStepIndex() *f64
```

- *Type:* *f64

---

##### `JobTargetGroupId`<sup>Required</sup> <a name="JobTargetGroupId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.jobTargetGroupId"></a>

```go
func JobTargetGroupId() *string
```

- *Type:* *string

---

##### `MaximumRetryIntervalSeconds`<sup>Required</sup> <a name="MaximumRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.maximumRetryIntervalSeconds"></a>

```go
func MaximumRetryIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetryAttempts`<sup>Required</sup> <a name="RetryAttempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryAttempts"></a>

```go
func RetryAttempts() *f64
```

- *Type:* *f64

---

##### `RetryIntervalBackoffMultiplier`<sup>Required</sup> <a name="RetryIntervalBackoffMultiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.retryIntervalBackoffMultiplier"></a>

```go
func RetryIntervalBackoffMultiplier() *f64
```

- *Type:* *f64

---

##### `SqlScript`<sup>Required</sup> <a name="SqlScript" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.sqlScript"></a>

```go
func SqlScript() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStep.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlJobStepConfig <a name="MssqlJobStepConfig" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqljobstep"

&mssqljobstep.MssqlJobStepConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	JobCredentialId: *string,
	JobId: *string,
	JobStepIndex: *f64,
	JobTargetGroupId: *string,
	Name: *string,
	SqlScript: *string,
	Id: *string,
	InitialRetryIntervalSeconds: *f64,
	MaximumRetryIntervalSeconds: *f64,
	OutputTarget: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlJobStep.MssqlJobStepOutputTarget,
	RetryAttempts: *f64,
	RetryIntervalBackoffMultiplier: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlJobStep.MssqlJobStepTimeouts,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobCredentialId">JobCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobId">JobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobStepIndex">JobStepIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobTargetGroupId">JobTargetGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#name MssqlJobStep#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.sqlScript">SqlScript</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#id MssqlJobStep#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.initialRetryIntervalSeconds">InitialRetryIntervalSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.maximumRetryIntervalSeconds">MaximumRetryIntervalSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.outputTarget">OutputTarget</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | output_target block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryAttempts">RetryAttempts</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryIntervalBackoffMultiplier">RetryIntervalBackoffMultiplier</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobCredentialId`<sup>Required</sup> <a name="JobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobCredentialId"></a>

```go
JobCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}.

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobId"></a>

```go
JobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}.

---

##### `JobStepIndex`<sup>Required</sup> <a name="JobStepIndex" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobStepIndex"></a>

```go
JobStepIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}.

---

##### `JobTargetGroupId`<sup>Required</sup> <a name="JobTargetGroupId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.jobTargetGroupId"></a>

```go
JobTargetGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#name MssqlJobStep#name}.

---

##### `SqlScript`<sup>Required</sup> <a name="SqlScript" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.sqlScript"></a>

```go
SqlScript *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#id MssqlJobStep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialRetryIntervalSeconds`<sup>Optional</sup> <a name="InitialRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.initialRetryIntervalSeconds"></a>

```go
InitialRetryIntervalSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}.

---

##### `MaximumRetryIntervalSeconds`<sup>Optional</sup> <a name="MaximumRetryIntervalSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.maximumRetryIntervalSeconds"></a>

```go
MaximumRetryIntervalSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}.

---

##### `OutputTarget`<sup>Optional</sup> <a name="OutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.outputTarget"></a>

```go
OutputTarget MssqlJobStepOutputTarget
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

output_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#output_target MssqlJobStep#output_target}

---

##### `RetryAttempts`<sup>Optional</sup> <a name="RetryAttempts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryAttempts"></a>

```go
RetryAttempts *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}.

---

##### `RetryIntervalBackoffMultiplier`<sup>Optional</sup> <a name="RetryIntervalBackoffMultiplier" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.retryIntervalBackoffMultiplier"></a>

```go
RetryIntervalBackoffMultiplier *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeouts"></a>

```go
Timeouts MssqlJobStepTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts">MssqlJobStepTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#timeouts MssqlJobStep#timeouts}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepConfig.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}.

---

### MssqlJobStepOutputTarget <a name="MssqlJobStepOutputTarget" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqljobstep"

&mssqljobstep.MssqlJobStepOutputTarget {
	JobCredentialId: *string,
	MssqlDatabaseId: *string,
	TableName: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.jobCredentialId">JobCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.mssqlDatabaseId">MssqlDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#mssql_database_id MssqlJobStep#mssql_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#table_name MssqlJobStep#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#schema_name MssqlJobStep#schema_name}. |

---

##### `JobCredentialId`<sup>Required</sup> <a name="JobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.jobCredentialId"></a>

```go
JobCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}.

---

##### `MssqlDatabaseId`<sup>Required</sup> <a name="MssqlDatabaseId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.mssqlDatabaseId"></a>

```go
MssqlDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#mssql_database_id MssqlJobStep#mssql_database_id}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#table_name MssqlJobStep#table_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#schema_name MssqlJobStep#schema_name}.

---

### MssqlJobStepTimeouts <a name="MssqlJobStepTimeouts" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqljobstep"

&mssqljobstep.MssqlJobStepTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#create MssqlJobStep#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#delete MssqlJobStep#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#read MssqlJobStep#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#update MssqlJobStep#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#create MssqlJobStep#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#delete MssqlJobStep#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#read MssqlJobStep#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/mssql_job_step#update MssqlJobStep#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlJobStepOutputTargetOutputReference <a name="MssqlJobStepOutputTargetOutputReference" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqljobstep"

mssqljobstep.NewMssqlJobStepOutputTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlJobStepOutputTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialIdInput">JobCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseIdInput">MssqlDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialId">JobCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseId">MssqlDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobCredentialIdInput`<sup>Optional</sup> <a name="JobCredentialIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialIdInput"></a>

```go
func JobCredentialIdInput() *string
```

- *Type:* *string

---

##### `MssqlDatabaseIdInput`<sup>Optional</sup> <a name="MssqlDatabaseIdInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseIdInput"></a>

```go
func MssqlDatabaseIdInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `JobCredentialId`<sup>Required</sup> <a name="JobCredentialId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.jobCredentialId"></a>

```go
func JobCredentialId() *string
```

- *Type:* *string

---

##### `MssqlDatabaseId`<sup>Required</sup> <a name="MssqlDatabaseId" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.mssqlDatabaseId"></a>

```go
func MssqlDatabaseId() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlJobStepOutputTarget
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepOutputTarget">MssqlJobStepOutputTarget</a>

---


### MssqlJobStepTimeoutsOutputReference <a name="MssqlJobStepTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqljobstep"

mssqljobstep.NewMssqlJobStepTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlJobStepTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlJobStep.MssqlJobStepTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



