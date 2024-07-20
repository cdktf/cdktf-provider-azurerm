# `kubernetesFleetUpdateStrategy` Submodule <a name="`kubernetesFleetUpdateStrategy` Submodule" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFleetUpdateStrategy <a name="KubernetesFleetUpdateStrategy" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy azurerm_kubernetes_fleet_update_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

kubernetesfleetupdatestrategy.NewKubernetesFleetUpdateStrategy(scope Construct, id *string, config KubernetesFleetUpdateStrategyConfig) KubernetesFleetUpdateStrategy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig">KubernetesFleetUpdateStrategyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig">KubernetesFleetUpdateStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putStage">PutStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStage` <a name="PutStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putStage"></a>

```go
func PutStage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putStage.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putTimeouts"></a>

```go
func PutTimeouts(value KubernetesFleetUpdateStrategyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesFleetUpdateStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

kubernetesfleetupdatestrategy.KubernetesFleetUpdateStrategy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

kubernetesfleetupdatestrategy.KubernetesFleetUpdateStrategy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

kubernetesfleetupdatestrategy.KubernetesFleetUpdateStrategy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

kubernetesfleetupdatestrategy.KubernetesFleetUpdateStrategy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KubernetesFleetUpdateStrategy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesFleetUpdateStrategy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesFleetUpdateStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesFleetUpdateStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stage">Stage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList">KubernetesFleetUpdateStrategyStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference">KubernetesFleetUpdateStrategyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerIdInput">KubernetesFleetManagerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stageInput">StageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerId">KubernetesFleetManagerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stage"></a>

```go
func Stage() KubernetesFleetUpdateStrategyStageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList">KubernetesFleetUpdateStrategyStageList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeouts"></a>

```go
func Timeouts() KubernetesFleetUpdateStrategyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference">KubernetesFleetUpdateStrategyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesFleetManagerIdInput`<sup>Optional</sup> <a name="KubernetesFleetManagerIdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerIdInput"></a>

```go
func KubernetesFleetManagerIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stageInput"></a>

```go
func StageInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesFleetManagerId`<sup>Required</sup> <a name="KubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerId"></a>

```go
func KubernetesFleetManagerId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFleetUpdateStrategyConfig <a name="KubernetesFleetUpdateStrategyConfig" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

&kubernetesfleetupdatestrategy.KubernetesFleetUpdateStrategyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KubernetesFleetManagerId: *string,
	Name: *string,
	Stage: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.kubernetesFleetManagerId">KubernetesFleetManagerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#kubernetes_fleet_manager_id KubernetesFleetUpdateStrategy#kubernetes_fleet_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.stage">Stage</a></code> | <code>interface{}</code> | stage block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#id KubernetesFleetUpdateStrategy#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KubernetesFleetManagerId`<sup>Required</sup> <a name="KubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.kubernetesFleetManagerId"></a>

```go
KubernetesFleetManagerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#kubernetes_fleet_manager_id KubernetesFleetUpdateStrategy#kubernetes_fleet_manager_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}.

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.stage"></a>

```go
Stage interface{}
```

- *Type:* interface{}

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#stage KubernetesFleetUpdateStrategy#stage}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#id KubernetesFleetUpdateStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.timeouts"></a>

```go
Timeouts KubernetesFleetUpdateStrategyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#timeouts KubernetesFleetUpdateStrategy#timeouts}

---

### KubernetesFleetUpdateStrategyStage <a name="KubernetesFleetUpdateStrategyStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

&kubernetesfleetupdatestrategy.KubernetesFleetUpdateStrategyStage {
	Group: interface{},
	Name: *string,
	AfterStageWaitInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.group">Group</a></code> | <code>interface{}</code> | group block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.afterStageWaitInSeconds">AfterStageWaitInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#after_stage_wait_in_seconds KubernetesFleetUpdateStrategy#after_stage_wait_in_seconds}. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.group"></a>

```go
Group interface{}
```

- *Type:* interface{}

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#group KubernetesFleetUpdateStrategy#group}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}.

---

##### `AfterStageWaitInSeconds`<sup>Optional</sup> <a name="AfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.afterStageWaitInSeconds"></a>

```go
AfterStageWaitInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#after_stage_wait_in_seconds KubernetesFleetUpdateStrategy#after_stage_wait_in_seconds}.

---

### KubernetesFleetUpdateStrategyStageGroup <a name="KubernetesFleetUpdateStrategyStageGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

&kubernetesfleetupdatestrategy.KubernetesFleetUpdateStrategyStageGroup {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}.

---

### KubernetesFleetUpdateStrategyTimeouts <a name="KubernetesFleetUpdateStrategyTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

&kubernetesfleetupdatestrategy.KubernetesFleetUpdateStrategyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#create KubernetesFleetUpdateStrategy#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#delete KubernetesFleetUpdateStrategy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#read KubernetesFleetUpdateStrategy#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#update KubernetesFleetUpdateStrategy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#create KubernetesFleetUpdateStrategy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#delete KubernetesFleetUpdateStrategy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#read KubernetesFleetUpdateStrategy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/kubernetes_fleet_update_strategy#update KubernetesFleetUpdateStrategy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFleetUpdateStrategyStageGroupList <a name="KubernetesFleetUpdateStrategyStageGroupList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

kubernetesfleetupdatestrategy.NewKubernetesFleetUpdateStrategyStageGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesFleetUpdateStrategyStageGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.get"></a>

```go
func Get(index *f64) KubernetesFleetUpdateStrategyStageGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFleetUpdateStrategyStageGroupOutputReference <a name="KubernetesFleetUpdateStrategyStageGroupOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

kubernetesfleetupdatestrategy.NewKubernetesFleetUpdateStrategyStageGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesFleetUpdateStrategyStageGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFleetUpdateStrategyStageList <a name="KubernetesFleetUpdateStrategyStageList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

kubernetesfleetupdatestrategy.NewKubernetesFleetUpdateStrategyStageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesFleetUpdateStrategyStageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.get"></a>

```go
func Get(index *f64) KubernetesFleetUpdateStrategyStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFleetUpdateStrategyStageOutputReference <a name="KubernetesFleetUpdateStrategyStageOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

kubernetesfleetupdatestrategy.NewKubernetesFleetUpdateStrategyStageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesFleetUpdateStrategyStageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resetAfterStageWaitInSeconds">ResetAfterStageWaitInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroup` <a name="PutGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.putGroup"></a>

```go
func PutGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.putGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAfterStageWaitInSeconds` <a name="ResetAfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resetAfterStageWaitInSeconds"></a>

```go
func ResetAfterStageWaitInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.group">Group</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList">KubernetesFleetUpdateStrategyStageGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSecondsInput">AfterStageWaitInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.groupInput">GroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSeconds">AfterStageWaitInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.group"></a>

```go
func Group() KubernetesFleetUpdateStrategyStageGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList">KubernetesFleetUpdateStrategyStageGroupList</a>

---

##### `AfterStageWaitInSecondsInput`<sup>Optional</sup> <a name="AfterStageWaitInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSecondsInput"></a>

```go
func AfterStageWaitInSecondsInput() *f64
```

- *Type:* *f64

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.groupInput"></a>

```go
func GroupInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AfterStageWaitInSeconds`<sup>Required</sup> <a name="AfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSeconds"></a>

```go
func AfterStageWaitInSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFleetUpdateStrategyTimeoutsOutputReference <a name="KubernetesFleetUpdateStrategyTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kubernetesfleetupdatestrategy"

kubernetesfleetupdatestrategy.NewKubernetesFleetUpdateStrategyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFleetUpdateStrategyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



