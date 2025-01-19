# `kubernetesFleetUpdateRun` Submodule <a name="`kubernetesFleetUpdateRun` Submodule" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFleetUpdateRun <a name="KubernetesFleetUpdateRun" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run azurerm_kubernetes_fleet_update_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.NewKubernetesFleetUpdateRun(scope Construct, id *string, config KubernetesFleetUpdateRunConfig) KubernetesFleetUpdateRun
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig">KubernetesFleetUpdateRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig">KubernetesFleetUpdateRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putManagedClusterUpdate">PutManagedClusterUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putStage">PutStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetFleetUpdateStrategyId">ResetFleetUpdateStrategyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetStage">ResetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManagedClusterUpdate` <a name="PutManagedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putManagedClusterUpdate"></a>

```go
func PutManagedClusterUpdate(value KubernetesFleetUpdateRunManagedClusterUpdate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putManagedClusterUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

---

##### `PutStage` <a name="PutStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putStage"></a>

```go
func PutStage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putStage.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putTimeouts"></a>

```go
func PutTimeouts(value KubernetesFleetUpdateRunTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a>

---

##### `ResetFleetUpdateStrategyId` <a name="ResetFleetUpdateStrategyId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetFleetUpdateStrategyId"></a>

```go
func ResetFleetUpdateStrategyId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetId"></a>

```go
func ResetId()
```

##### `ResetStage` <a name="ResetStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetStage"></a>

```go
func ResetStage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesFleetUpdateRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.KubernetesFleetUpdateRun_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.KubernetesFleetUpdateRun_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.KubernetesFleetUpdateRun_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.KubernetesFleetUpdateRun_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KubernetesFleetUpdateRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesFleetUpdateRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesFleetUpdateRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesFleetUpdateRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdate">ManagedClusterUpdate</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stage">Stage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList">KubernetesFleetUpdateRunStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference">KubernetesFleetUpdateRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyIdInput">FleetUpdateStrategyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerIdInput">KubernetesFleetManagerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdateInput">ManagedClusterUpdateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stageInput">StageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyId">FleetUpdateStrategyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerId">KubernetesFleetManagerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedClusterUpdate`<sup>Required</sup> <a name="ManagedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdate"></a>

```go
func ManagedClusterUpdate() KubernetesFleetUpdateRunManagedClusterUpdateOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateOutputReference</a>

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stage"></a>

```go
func Stage() KubernetesFleetUpdateRunStageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList">KubernetesFleetUpdateRunStageList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeouts"></a>

```go
func Timeouts() KubernetesFleetUpdateRunTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference">KubernetesFleetUpdateRunTimeoutsOutputReference</a>

---

##### `FleetUpdateStrategyIdInput`<sup>Optional</sup> <a name="FleetUpdateStrategyIdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyIdInput"></a>

```go
func FleetUpdateStrategyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesFleetManagerIdInput`<sup>Optional</sup> <a name="KubernetesFleetManagerIdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerIdInput"></a>

```go
func KubernetesFleetManagerIdInput() *string
```

- *Type:* *string

---

##### `ManagedClusterUpdateInput`<sup>Optional</sup> <a name="ManagedClusterUpdateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdateInput"></a>

```go
func ManagedClusterUpdateInput() KubernetesFleetUpdateRunManagedClusterUpdate
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stageInput"></a>

```go
func StageInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `FleetUpdateStrategyId`<sup>Required</sup> <a name="FleetUpdateStrategyId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyId"></a>

```go
func FleetUpdateStrategyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesFleetManagerId`<sup>Required</sup> <a name="KubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerId"></a>

```go
func KubernetesFleetManagerId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFleetUpdateRunConfig <a name="KubernetesFleetUpdateRunConfig" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

&kubernetesfleetupdaterun.KubernetesFleetUpdateRunConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KubernetesFleetManagerId: *string,
	ManagedClusterUpdate: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate,
	Name: *string,
	FleetUpdateStrategyId: *string,
	Id: *string,
	Stage: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.kubernetesFleetManagerId">KubernetesFleetManagerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#kubernetes_fleet_manager_id KubernetesFleetUpdateRun#kubernetes_fleet_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.managedClusterUpdate">ManagedClusterUpdate</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a></code> | managed_cluster_update block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.fleetUpdateStrategyId">FleetUpdateStrategyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#fleet_update_strategy_id KubernetesFleetUpdateRun#fleet_update_strategy_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#id KubernetesFleetUpdateRun#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.stage">Stage</a></code> | <code>interface{}</code> | stage block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KubernetesFleetManagerId`<sup>Required</sup> <a name="KubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.kubernetesFleetManagerId"></a>

```go
KubernetesFleetManagerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#kubernetes_fleet_manager_id KubernetesFleetUpdateRun#kubernetes_fleet_manager_id}.

---

##### `ManagedClusterUpdate`<sup>Required</sup> <a name="ManagedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.managedClusterUpdate"></a>

```go
ManagedClusterUpdate KubernetesFleetUpdateRunManagedClusterUpdate
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

managed_cluster_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#managed_cluster_update KubernetesFleetUpdateRun#managed_cluster_update}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}.

---

##### `FleetUpdateStrategyId`<sup>Optional</sup> <a name="FleetUpdateStrategyId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.fleetUpdateStrategyId"></a>

```go
FleetUpdateStrategyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#fleet_update_strategy_id KubernetesFleetUpdateRun#fleet_update_strategy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#id KubernetesFleetUpdateRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.stage"></a>

```go
Stage interface{}
```

- *Type:* interface{}

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#stage KubernetesFleetUpdateRun#stage}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.timeouts"></a>

```go
Timeouts KubernetesFleetUpdateRunTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#timeouts KubernetesFleetUpdateRun#timeouts}

---

### KubernetesFleetUpdateRunManagedClusterUpdate <a name="KubernetesFleetUpdateRunManagedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

&kubernetesfleetupdaterun.KubernetesFleetUpdateRunManagedClusterUpdate {
	Upgrade: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade,
	NodeImageSelection: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.nodeImageSelection">NodeImageSelection</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a></code> | node_image_selection block. |

---

##### `Upgrade`<sup>Required</sup> <a name="Upgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.upgrade"></a>

```go
Upgrade KubernetesFleetUpdateRunManagedClusterUpdateUpgrade
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#upgrade KubernetesFleetUpdateRun#upgrade}

---

##### `NodeImageSelection`<sup>Optional</sup> <a name="NodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.nodeImageSelection"></a>

```go
NodeImageSelection KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

node_image_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#node_image_selection KubernetesFleetUpdateRun#node_image_selection}

---

### KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection <a name="KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

&kubernetesfleetupdaterun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}.

---

### KubernetesFleetUpdateRunManagedClusterUpdateUpgrade <a name="KubernetesFleetUpdateRunManagedClusterUpdateUpgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

&kubernetesfleetupdaterun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade {
	Type: *string,
	KubernetesVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#kubernetes_version KubernetesFleetUpdateRun#kubernetes_version}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}.

---

##### `KubernetesVersion`<sup>Optional</sup> <a name="KubernetesVersion" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.kubernetesVersion"></a>

```go
KubernetesVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#kubernetes_version KubernetesFleetUpdateRun#kubernetes_version}.

---

### KubernetesFleetUpdateRunStage <a name="KubernetesFleetUpdateRunStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

&kubernetesfleetupdaterun.KubernetesFleetUpdateRunStage {
	Group: interface{},
	Name: *string,
	AfterStageWaitInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.group">Group</a></code> | <code>interface{}</code> | group block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.afterStageWaitInSeconds">AfterStageWaitInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#after_stage_wait_in_seconds KubernetesFleetUpdateRun#after_stage_wait_in_seconds}. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.group"></a>

```go
Group interface{}
```

- *Type:* interface{}

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#group KubernetesFleetUpdateRun#group}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}.

---

##### `AfterStageWaitInSeconds`<sup>Optional</sup> <a name="AfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.afterStageWaitInSeconds"></a>

```go
AfterStageWaitInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#after_stage_wait_in_seconds KubernetesFleetUpdateRun#after_stage_wait_in_seconds}.

---

### KubernetesFleetUpdateRunStageGroup <a name="KubernetesFleetUpdateRunStageGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

&kubernetesfleetupdaterun.KubernetesFleetUpdateRunStageGroup {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}.

---

### KubernetesFleetUpdateRunTimeouts <a name="KubernetesFleetUpdateRunTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

&kubernetesfleetupdaterun.KubernetesFleetUpdateRunTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#create KubernetesFleetUpdateRun#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#delete KubernetesFleetUpdateRun#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#read KubernetesFleetUpdateRun#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#update KubernetesFleetUpdateRun#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#create KubernetesFleetUpdateRun#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#delete KubernetesFleetUpdateRun#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#read KubernetesFleetUpdateRun#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/kubernetes_fleet_update_run#update KubernetesFleetUpdateRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference <a name="KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.NewKubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

---


### KubernetesFleetUpdateRunManagedClusterUpdateOutputReference <a name="KubernetesFleetUpdateRunManagedClusterUpdateOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.NewKubernetesFleetUpdateRunManagedClusterUpdateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFleetUpdateRunManagedClusterUpdateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putNodeImageSelection">PutNodeImageSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putUpgrade">PutUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resetNodeImageSelection">ResetNodeImageSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeImageSelection` <a name="PutNodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putNodeImageSelection"></a>

```go
func PutNodeImageSelection(value KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putNodeImageSelection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

---

##### `PutUpgrade` <a name="PutUpgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putUpgrade"></a>

```go
func PutUpgrade(value KubernetesFleetUpdateRunManagedClusterUpdateUpgrade)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putUpgrade.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

---

##### `ResetNodeImageSelection` <a name="ResetNodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resetNodeImageSelection"></a>

```go
func ResetNodeImageSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelection">NodeImageSelection</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelectionInput">NodeImageSelectionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgradeInput">UpgradeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeImageSelection`<sup>Required</sup> <a name="NodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelection"></a>

```go
func NodeImageSelection() KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference</a>

---

##### `Upgrade`<sup>Required</sup> <a name="Upgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgrade"></a>

```go
func Upgrade() KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference</a>

---

##### `NodeImageSelectionInput`<sup>Optional</sup> <a name="NodeImageSelectionInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelectionInput"></a>

```go
func NodeImageSelectionInput() KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

---

##### `UpgradeInput`<sup>Optional</sup> <a name="UpgradeInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgradeInput"></a>

```go
func UpgradeInput() KubernetesFleetUpdateRunManagedClusterUpdateUpgrade
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesFleetUpdateRunManagedClusterUpdate
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

---


### KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference <a name="KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.NewKubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resetKubernetesVersion">ResetKubernetesVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKubernetesVersion` <a name="ResetKubernetesVersion" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resetKubernetesVersion"></a>

```go
func ResetKubernetesVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersionInput">KubernetesVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KubernetesVersionInput`<sup>Optional</sup> <a name="KubernetesVersionInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersionInput"></a>

```go
func KubernetesVersionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersion"></a>

```go
func KubernetesVersion() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesFleetUpdateRunManagedClusterUpdateUpgrade
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

---


### KubernetesFleetUpdateRunStageGroupList <a name="KubernetesFleetUpdateRunStageGroupList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.NewKubernetesFleetUpdateRunStageGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesFleetUpdateRunStageGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.get"></a>

```go
func Get(index *f64) KubernetesFleetUpdateRunStageGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFleetUpdateRunStageGroupOutputReference <a name="KubernetesFleetUpdateRunStageGroupOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.NewKubernetesFleetUpdateRunStageGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesFleetUpdateRunStageGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFleetUpdateRunStageList <a name="KubernetesFleetUpdateRunStageList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.NewKubernetesFleetUpdateRunStageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesFleetUpdateRunStageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.get"></a>

```go
func Get(index *f64) KubernetesFleetUpdateRunStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFleetUpdateRunStageOutputReference <a name="KubernetesFleetUpdateRunStageOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.NewKubernetesFleetUpdateRunStageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesFleetUpdateRunStageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resetAfterStageWaitInSeconds">ResetAfterStageWaitInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroup` <a name="PutGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.putGroup"></a>

```go
func PutGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.putGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAfterStageWaitInSeconds` <a name="ResetAfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resetAfterStageWaitInSeconds"></a>

```go
func ResetAfterStageWaitInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.group">Group</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList">KubernetesFleetUpdateRunStageGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSecondsInput">AfterStageWaitInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.groupInput">GroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSeconds">AfterStageWaitInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.group"></a>

```go
func Group() KubernetesFleetUpdateRunStageGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList">KubernetesFleetUpdateRunStageGroupList</a>

---

##### `AfterStageWaitInSecondsInput`<sup>Optional</sup> <a name="AfterStageWaitInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSecondsInput"></a>

```go
func AfterStageWaitInSecondsInput() *f64
```

- *Type:* *f64

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.groupInput"></a>

```go
func GroupInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AfterStageWaitInSeconds`<sup>Required</sup> <a name="AfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSeconds"></a>

```go
func AfterStageWaitInSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFleetUpdateRunTimeoutsOutputReference <a name="KubernetesFleetUpdateRunTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdaterun"

kubernetesfleetupdaterun.NewKubernetesFleetUpdateRunTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFleetUpdateRunTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



