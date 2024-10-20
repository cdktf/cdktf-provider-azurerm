# `storageContainerImmutabilityPolicy` Submodule <a name="`storageContainerImmutabilityPolicy` Submodule" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageContainerImmutabilityPolicy <a name="StorageContainerImmutabilityPolicy" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy azurerm_storage_container_immutability_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagecontainerimmutabilitypolicy"

storagecontainerimmutabilitypolicy.NewStorageContainerImmutabilityPolicy(scope Construct, id *string, config StorageContainerImmutabilityPolicyConfig) StorageContainerImmutabilityPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig">StorageContainerImmutabilityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig">StorageContainerImmutabilityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetLocked">ResetLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetProtectedAppendWritesAllEnabled">ResetProtectedAppendWritesAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetProtectedAppendWritesEnabled">ResetProtectedAppendWritesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.putTimeouts"></a>

```go
func PutTimeouts(value StorageContainerImmutabilityPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts">StorageContainerImmutabilityPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocked` <a name="ResetLocked" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetLocked"></a>

```go
func ResetLocked()
```

##### `ResetProtectedAppendWritesAllEnabled` <a name="ResetProtectedAppendWritesAllEnabled" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetProtectedAppendWritesAllEnabled"></a>

```go
func ResetProtectedAppendWritesAllEnabled()
```

##### `ResetProtectedAppendWritesEnabled` <a name="ResetProtectedAppendWritesEnabled" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetProtectedAppendWritesEnabled"></a>

```go
func ResetProtectedAppendWritesEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageContainerImmutabilityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagecontainerimmutabilitypolicy"

storagecontainerimmutabilitypolicy.StorageContainerImmutabilityPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagecontainerimmutabilitypolicy"

storagecontainerimmutabilitypolicy.StorageContainerImmutabilityPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagecontainerimmutabilitypolicy"

storagecontainerimmutabilitypolicy.StorageContainerImmutabilityPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagecontainerimmutabilitypolicy"

storagecontainerimmutabilitypolicy.StorageContainerImmutabilityPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StorageContainerImmutabilityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageContainerImmutabilityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageContainerImmutabilityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StorageContainerImmutabilityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference">StorageContainerImmutabilityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.immutabilityPeriodInDaysInput">ImmutabilityPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.lockedInput">LockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesAllEnabledInput">ProtectedAppendWritesAllEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesEnabledInput">ProtectedAppendWritesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.storageContainerResourceManagerIdInput">StorageContainerResourceManagerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.immutabilityPeriodInDays">ImmutabilityPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.locked">Locked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesAllEnabled">ProtectedAppendWritesAllEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesEnabled">ProtectedAppendWritesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.storageContainerResourceManagerId">StorageContainerResourceManagerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.timeouts"></a>

```go
func Timeouts() StorageContainerImmutabilityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference">StorageContainerImmutabilityPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImmutabilityPeriodInDaysInput`<sup>Optional</sup> <a name="ImmutabilityPeriodInDaysInput" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.immutabilityPeriodInDaysInput"></a>

```go
func ImmutabilityPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `LockedInput`<sup>Optional</sup> <a name="LockedInput" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.lockedInput"></a>

```go
func LockedInput() interface{}
```

- *Type:* interface{}

---

##### `ProtectedAppendWritesAllEnabledInput`<sup>Optional</sup> <a name="ProtectedAppendWritesAllEnabledInput" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesAllEnabledInput"></a>

```go
func ProtectedAppendWritesAllEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProtectedAppendWritesEnabledInput`<sup>Optional</sup> <a name="ProtectedAppendWritesEnabledInput" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesEnabledInput"></a>

```go
func ProtectedAppendWritesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StorageContainerResourceManagerIdInput`<sup>Optional</sup> <a name="StorageContainerResourceManagerIdInput" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.storageContainerResourceManagerIdInput"></a>

```go
func StorageContainerResourceManagerIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImmutabilityPeriodInDays`<sup>Required</sup> <a name="ImmutabilityPeriodInDays" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.immutabilityPeriodInDays"></a>

```go
func ImmutabilityPeriodInDays() *f64
```

- *Type:* *f64

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.locked"></a>

```go
func Locked() interface{}
```

- *Type:* interface{}

---

##### `ProtectedAppendWritesAllEnabled`<sup>Required</sup> <a name="ProtectedAppendWritesAllEnabled" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesAllEnabled"></a>

```go
func ProtectedAppendWritesAllEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProtectedAppendWritesEnabled`<sup>Required</sup> <a name="ProtectedAppendWritesEnabled" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesEnabled"></a>

```go
func ProtectedAppendWritesEnabled() interface{}
```

- *Type:* interface{}

---

##### `StorageContainerResourceManagerId`<sup>Required</sup> <a name="StorageContainerResourceManagerId" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.storageContainerResourceManagerId"></a>

```go
func StorageContainerResourceManagerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageContainerImmutabilityPolicyConfig <a name="StorageContainerImmutabilityPolicyConfig" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagecontainerimmutabilitypolicy"

&storagecontainerimmutabilitypolicy.StorageContainerImmutabilityPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ImmutabilityPeriodInDays: *f64,
	StorageContainerResourceManagerId: *string,
	Id: *string,
	Locked: interface{},
	ProtectedAppendWritesAllEnabled: interface{},
	ProtectedAppendWritesEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.immutabilityPeriodInDays">ImmutabilityPeriodInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#immutability_period_in_days StorageContainerImmutabilityPolicy#immutability_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.storageContainerResourceManagerId">StorageContainerResourceManagerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#storage_container_resource_manager_id StorageContainerImmutabilityPolicy#storage_container_resource_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#id StorageContainerImmutabilityPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.locked">Locked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#locked StorageContainerImmutabilityPolicy#locked}. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.protectedAppendWritesAllEnabled">ProtectedAppendWritesAllEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#protected_append_writes_all_enabled StorageContainerImmutabilityPolicy#protected_append_writes_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.protectedAppendWritesEnabled">ProtectedAppendWritesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#protected_append_writes_enabled StorageContainerImmutabilityPolicy#protected_append_writes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts">StorageContainerImmutabilityPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ImmutabilityPeriodInDays`<sup>Required</sup> <a name="ImmutabilityPeriodInDays" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.immutabilityPeriodInDays"></a>

```go
ImmutabilityPeriodInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#immutability_period_in_days StorageContainerImmutabilityPolicy#immutability_period_in_days}.

---

##### `StorageContainerResourceManagerId`<sup>Required</sup> <a name="StorageContainerResourceManagerId" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.storageContainerResourceManagerId"></a>

```go
StorageContainerResourceManagerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#storage_container_resource_manager_id StorageContainerImmutabilityPolicy#storage_container_resource_manager_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#id StorageContainerImmutabilityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Locked`<sup>Optional</sup> <a name="Locked" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.locked"></a>

```go
Locked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#locked StorageContainerImmutabilityPolicy#locked}.

---

##### `ProtectedAppendWritesAllEnabled`<sup>Optional</sup> <a name="ProtectedAppendWritesAllEnabled" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.protectedAppendWritesAllEnabled"></a>

```go
ProtectedAppendWritesAllEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#protected_append_writes_all_enabled StorageContainerImmutabilityPolicy#protected_append_writes_all_enabled}.

---

##### `ProtectedAppendWritesEnabled`<sup>Optional</sup> <a name="ProtectedAppendWritesEnabled" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.protectedAppendWritesEnabled"></a>

```go
ProtectedAppendWritesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#protected_append_writes_enabled StorageContainerImmutabilityPolicy#protected_append_writes_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.timeouts"></a>

```go
Timeouts StorageContainerImmutabilityPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts">StorageContainerImmutabilityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#timeouts StorageContainerImmutabilityPolicy#timeouts}

---

### StorageContainerImmutabilityPolicyTimeouts <a name="StorageContainerImmutabilityPolicyTimeouts" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagecontainerimmutabilitypolicy"

&storagecontainerimmutabilitypolicy.StorageContainerImmutabilityPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#create StorageContainerImmutabilityPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#delete StorageContainerImmutabilityPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#read StorageContainerImmutabilityPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#update StorageContainerImmutabilityPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#create StorageContainerImmutabilityPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#delete StorageContainerImmutabilityPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#read StorageContainerImmutabilityPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/storage_container_immutability_policy#update StorageContainerImmutabilityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageContainerImmutabilityPolicyTimeoutsOutputReference <a name="StorageContainerImmutabilityPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/storagecontainerimmutabilitypolicy"

storagecontainerimmutabilitypolicy.NewStorageContainerImmutabilityPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageContainerImmutabilityPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



