# `containerAppEnvironmentDaprComponent` Submodule <a name="`containerAppEnvironmentDaprComponent` Submodule" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironmentDaprComponent <a name="ContainerAppEnvironmentDaprComponent" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component azurerm_container_app_environment_dapr_component}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

containerappenvironmentdaprcomponent.NewContainerAppEnvironmentDaprComponent(scope Construct, id *string, config ContainerAppEnvironmentDaprComponentConfig) ContainerAppEnvironmentDaprComponent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig">ContainerAppEnvironmentDaprComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig">ContainerAppEnvironmentDaprComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetIgnoreErrors">ResetIgnoreErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetInitTimeout">ResetInitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putMetadata"></a>

```go
func PutMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putSecret"></a>

```go
func PutSecret(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putSecret.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putTimeouts"></a>

```go
func PutTimeouts(value ContainerAppEnvironmentDaprComponentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreErrors` <a name="ResetIgnoreErrors" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetIgnoreErrors"></a>

```go
func ResetIgnoreErrors()
```

##### `ResetInitTimeout` <a name="ResetInitTimeout" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetInitTimeout"></a>

```go
func ResetInitTimeout()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAppEnvironmentDaprComponent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

containerappenvironmentdaprcomponent.ContainerAppEnvironmentDaprComponent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

containerappenvironmentdaprcomponent.ContainerAppEnvironmentDaprComponent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

containerappenvironmentdaprcomponent.ContainerAppEnvironmentDaprComponent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

containerappenvironmentdaprcomponent.ContainerAppEnvironmentDaprComponent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerAppEnvironmentDaprComponent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerAppEnvironmentDaprComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerAppEnvironmentDaprComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAppEnvironmentDaprComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList">ContainerAppEnvironmentDaprComponentMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList">ContainerAppEnvironmentDaprComponentSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference">ContainerAppEnvironmentDaprComponentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentTypeInput">ComponentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentIdInput">ContainerAppEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrorsInput">IgnoreErrorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeoutInput">InitTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadataInput">MetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentType">ComponentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrors">IgnoreErrors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeout">InitTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadata"></a>

```go
func Metadata() ContainerAppEnvironmentDaprComponentMetadataList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList">ContainerAppEnvironmentDaprComponentMetadataList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secret"></a>

```go
func Secret() ContainerAppEnvironmentDaprComponentSecretList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList">ContainerAppEnvironmentDaprComponentSecretList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeouts"></a>

```go
func Timeouts() ContainerAppEnvironmentDaprComponentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference">ContainerAppEnvironmentDaprComponentTimeoutsOutputReference</a>

---

##### `ComponentTypeInput`<sup>Optional</sup> <a name="ComponentTypeInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentTypeInput"></a>

```go
func ComponentTypeInput() *string
```

- *Type:* *string

---

##### `ContainerAppEnvironmentIdInput`<sup>Optional</sup> <a name="ContainerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentIdInput"></a>

```go
func ContainerAppEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreErrorsInput`<sup>Optional</sup> <a name="IgnoreErrorsInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrorsInput"></a>

```go
func IgnoreErrorsInput() interface{}
```

- *Type:* interface{}

---

##### `InitTimeoutInput`<sup>Optional</sup> <a name="InitTimeoutInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeoutInput"></a>

```go
func InitTimeoutInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadataInput"></a>

```go
func MetadataInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentType"></a>

```go
func ComponentType() *string
```

- *Type:* *string

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentId"></a>

```go
func ContainerAppEnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreErrors`<sup>Required</sup> <a name="IgnoreErrors" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrors"></a>

```go
func IgnoreErrors() interface{}
```

- *Type:* interface{}

---

##### `InitTimeout`<sup>Required</sup> <a name="InitTimeout" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeout"></a>

```go
func InitTimeout() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentDaprComponentConfig <a name="ContainerAppEnvironmentDaprComponentConfig" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

&containerappenvironmentdaprcomponent.ContainerAppEnvironmentDaprComponentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ComponentType: *string,
	ContainerAppEnvironmentId: *string,
	Name: *string,
	Version: *string,
	Id: *string,
	IgnoreErrors: interface{},
	InitTimeout: *string,
	Metadata: interface{},
	Scopes: *[]*string,
	Secret: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.componentType">ComponentType</a></code> | <code>*string</code> | The Dapr Component Type. For example `state.azure.blobstorage`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>*string</code> | The Container App Managed Environment ID to configure this Dapr component on. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.name">Name</a></code> | <code>*string</code> | The name for this Dapr Component. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.version">Version</a></code> | <code>*string</code> | The version of the component. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#id ContainerAppEnvironmentDaprComponent#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.ignoreErrors">IgnoreErrors</a></code> | <code>interface{}</code> | Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.initTimeout">InitTimeout</a></code> | <code>*string</code> | The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.metadata">Metadata</a></code> | <code>interface{}</code> | metadata block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.secret">Secret</a></code> | <code>interface{}</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.componentType"></a>

```go
ComponentType *string
```

- *Type:* *string

The Dapr Component Type. For example `state.azure.blobstorage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#component_type ContainerAppEnvironmentDaprComponent#component_type}

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.containerAppEnvironmentId"></a>

```go
ContainerAppEnvironmentId *string
```

- *Type:* *string

The Container App Managed Environment ID to configure this Dapr component on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#container_app_environment_id ContainerAppEnvironmentDaprComponent#container_app_environment_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this Dapr Component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#version ContainerAppEnvironmentDaprComponent#version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#id ContainerAppEnvironmentDaprComponent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreErrors`<sup>Optional</sup> <a name="IgnoreErrors" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.ignoreErrors"></a>

```go
IgnoreErrors interface{}
```

- *Type:* interface{}

Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#ignore_errors ContainerAppEnvironmentDaprComponent#ignore_errors}

---

##### `InitTimeout`<sup>Optional</sup> <a name="InitTimeout" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.initTimeout"></a>

```go
InitTimeout *string
```

- *Type:* *string

The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#init_timeout ContainerAppEnvironmentDaprComponent#init_timeout}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.metadata"></a>

```go
Metadata interface{}
```

- *Type:* interface{}

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#metadata ContainerAppEnvironmentDaprComponent#metadata}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#scopes ContainerAppEnvironmentDaprComponent#scopes}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#secret ContainerAppEnvironmentDaprComponent#secret}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.timeouts"></a>

```go
Timeouts ContainerAppEnvironmentDaprComponentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#timeouts ContainerAppEnvironmentDaprComponent#timeouts}

---

### ContainerAppEnvironmentDaprComponentMetadata <a name="ContainerAppEnvironmentDaprComponentMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

&containerappenvironmentdaprcomponent.ContainerAppEnvironmentDaprComponentMetadata {
	Name: *string,
	SecretName: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.name">Name</a></code> | <code>*string</code> | The name of the Metadata configuration item. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.secretName">SecretName</a></code> | <code>*string</code> | The name of a secret specified in the `secrets` block that contains the value for this metadata configuration item. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.value">Value</a></code> | <code>*string</code> | The value for this metadata configuration item. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Metadata configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

The name of a secret specified in the `secrets` block that contains the value for this metadata configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#secret_name ContainerAppEnvironmentDaprComponent#secret_name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for this metadata configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#value ContainerAppEnvironmentDaprComponent#value}

---

### ContainerAppEnvironmentDaprComponentSecret <a name="ContainerAppEnvironmentDaprComponentSecret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

&containerappenvironmentdaprcomponent.ContainerAppEnvironmentDaprComponentSecret {
	Name: *string,
	Identity: *string,
	KeyVaultSecretId: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.name">Name</a></code> | <code>*string</code> | The secret name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.identity">Identity</a></code> | <code>*string</code> | The identity to use for accessing key vault reference. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>*string</code> | The Key Vault Secret ID. Could be either one of `id` or `versionless_id`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.value">Value</a></code> | <code>*string</code> | The value for this secret. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.name"></a>

```go
Name *string
```

- *Type:* *string

The secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.identity"></a>

```go
Identity *string
```

- *Type:* *string

The identity to use for accessing key vault reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#identity ContainerAppEnvironmentDaprComponent#identity}

---

##### `KeyVaultSecretId`<sup>Optional</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.keyVaultSecretId"></a>

```go
KeyVaultSecretId *string
```

- *Type:* *string

The Key Vault Secret ID. Could be either one of `id` or `versionless_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#key_vault_secret_id ContainerAppEnvironmentDaprComponent#key_vault_secret_id}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#value ContainerAppEnvironmentDaprComponent#value}

---

### ContainerAppEnvironmentDaprComponentTimeouts <a name="ContainerAppEnvironmentDaprComponentTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

&containerappenvironmentdaprcomponent.ContainerAppEnvironmentDaprComponentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#create ContainerAppEnvironmentDaprComponent#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#delete ContainerAppEnvironmentDaprComponent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#read ContainerAppEnvironmentDaprComponent#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#update ContainerAppEnvironmentDaprComponent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#create ContainerAppEnvironmentDaprComponent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#delete ContainerAppEnvironmentDaprComponent#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#read ContainerAppEnvironmentDaprComponent#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/container_app_environment_dapr_component#update ContainerAppEnvironmentDaprComponent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentDaprComponentMetadataList <a name="ContainerAppEnvironmentDaprComponentMetadataList" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

containerappenvironmentdaprcomponent.NewContainerAppEnvironmentDaprComponentMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppEnvironmentDaprComponentMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.get"></a>

```go
func Get(index *f64) ContainerAppEnvironmentDaprComponentMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppEnvironmentDaprComponentMetadataOutputReference <a name="ContainerAppEnvironmentDaprComponentMetadataOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

containerappenvironmentdaprcomponent.NewContainerAppEnvironmentDaprComponentMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppEnvironmentDaprComponentMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetSecretName"></a>

```go
func ResetSecretName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppEnvironmentDaprComponentSecretList <a name="ContainerAppEnvironmentDaprComponentSecretList" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

containerappenvironmentdaprcomponent.NewContainerAppEnvironmentDaprComponentSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerAppEnvironmentDaprComponentSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.get"></a>

```go
func Get(index *f64) ContainerAppEnvironmentDaprComponentSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppEnvironmentDaprComponentSecretOutputReference <a name="ContainerAppEnvironmentDaprComponentSecretOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

containerappenvironmentdaprcomponent.NewContainerAppEnvironmentDaprComponentSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerAppEnvironmentDaprComponentSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetKeyVaultSecretId">ResetKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetKeyVaultSecretId` <a name="ResetKeyVaultSecretId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetKeyVaultSecretId"></a>

```go
func ResetKeyVaultSecretId()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.identityInput">IdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.keyVaultSecretIdInput">KeyVaultSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.identityInput"></a>

```go
func IdentityInput() *string
```

- *Type:* *string

---

##### `KeyVaultSecretIdInput`<sup>Optional</sup> <a name="KeyVaultSecretIdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.keyVaultSecretIdInput"></a>

```go
func KeyVaultSecretIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `KeyVaultSecretId`<sup>Required</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.keyVaultSecretId"></a>

```go
func KeyVaultSecretId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerAppEnvironmentDaprComponentTimeoutsOutputReference <a name="ContainerAppEnvironmentDaprComponentTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerappenvironmentdaprcomponent"

containerappenvironmentdaprcomponent.NewContainerAppEnvironmentDaprComponentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAppEnvironmentDaprComponentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



