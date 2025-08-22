# `hpcCacheBlobNfsTarget` Submodule <a name="`hpcCacheBlobNfsTarget` Submodule" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCacheBlobNfsTarget <a name="HpcCacheBlobNfsTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target azurerm_hpc_cache_blob_nfs_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/hpccacheblobnfstarget"

hpccacheblobnfstarget.NewHpcCacheBlobNfsTarget(scope Construct, id *string, config HpcCacheBlobNfsTargetConfig) HpcCacheBlobNfsTarget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig">HpcCacheBlobNfsTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig">HpcCacheBlobNfsTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetAccessPolicyName">ResetAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetVerificationTimerInSeconds">ResetVerificationTimerInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetWriteBackTimerInSeconds">ResetWriteBackTimerInSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.putTimeouts"></a>

```go
func PutTimeouts(value HpcCacheBlobNfsTargetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a>

---

##### `ResetAccessPolicyName` <a name="ResetAccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetAccessPolicyName"></a>

```go
func ResetAccessPolicyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVerificationTimerInSeconds` <a name="ResetVerificationTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetVerificationTimerInSeconds"></a>

```go
func ResetVerificationTimerInSeconds()
```

##### `ResetWriteBackTimerInSeconds` <a name="ResetWriteBackTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.resetWriteBackTimerInSeconds"></a>

```go
func ResetWriteBackTimerInSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HpcCacheBlobNfsTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/hpccacheblobnfstarget"

hpccacheblobnfstarget.HpcCacheBlobNfsTarget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/hpccacheblobnfstarget"

hpccacheblobnfstarget.HpcCacheBlobNfsTarget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/hpccacheblobnfstarget"

hpccacheblobnfstarget.HpcCacheBlobNfsTarget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/hpccacheblobnfstarget"

hpccacheblobnfstarget.HpcCacheBlobNfsTarget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a HpcCacheBlobNfsTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HpcCacheBlobNfsTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HpcCacheBlobNfsTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the HpcCacheBlobNfsTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference">HpcCacheBlobNfsTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyNameInput">AccessPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheNameInput">CacheNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePathInput">NamespacePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerIdInput">StorageContainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModelInput">UsageModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSecondsInput">VerificationTimerInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSecondsInput">WriteBackTimerInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyName">AccessPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheName">CacheName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePath">NamespacePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerId">StorageContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModel">UsageModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSeconds">VerificationTimerInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSeconds">WriteBackTimerInSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeouts"></a>

```go
func Timeouts() HpcCacheBlobNfsTargetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference">HpcCacheBlobNfsTargetTimeoutsOutputReference</a>

---

##### `AccessPolicyNameInput`<sup>Optional</sup> <a name="AccessPolicyNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyNameInput"></a>

```go
func AccessPolicyNameInput() *string
```

- *Type:* *string

---

##### `CacheNameInput`<sup>Optional</sup> <a name="CacheNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheNameInput"></a>

```go
func CacheNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespacePathInput`<sup>Optional</sup> <a name="NamespacePathInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePathInput"></a>

```go
func NamespacePathInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `StorageContainerIdInput`<sup>Optional</sup> <a name="StorageContainerIdInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerIdInput"></a>

```go
func StorageContainerIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModelInput"></a>

```go
func UsageModelInput() *string
```

- *Type:* *string

---

##### `VerificationTimerInSecondsInput`<sup>Optional</sup> <a name="VerificationTimerInSecondsInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSecondsInput"></a>

```go
func VerificationTimerInSecondsInput() *f64
```

- *Type:* *f64

---

##### `WriteBackTimerInSecondsInput`<sup>Optional</sup> <a name="WriteBackTimerInSecondsInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSecondsInput"></a>

```go
func WriteBackTimerInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AccessPolicyName`<sup>Required</sup> <a name="AccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.accessPolicyName"></a>

```go
func AccessPolicyName() *string
```

- *Type:* *string

---

##### `CacheName`<sup>Required</sup> <a name="CacheName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.cacheName"></a>

```go
func CacheName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.namespacePath"></a>

```go
func NamespacePath() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.storageContainerId"></a>

```go
func StorageContainerId() *string
```

- *Type:* *string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.usageModel"></a>

```go
func UsageModel() *string
```

- *Type:* *string

---

##### `VerificationTimerInSeconds`<sup>Required</sup> <a name="VerificationTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.verificationTimerInSeconds"></a>

```go
func VerificationTimerInSeconds() *f64
```

- *Type:* *f64

---

##### `WriteBackTimerInSeconds`<sup>Required</sup> <a name="WriteBackTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.writeBackTimerInSeconds"></a>

```go
func WriteBackTimerInSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTarget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheBlobNfsTargetConfig <a name="HpcCacheBlobNfsTargetConfig" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/hpccacheblobnfstarget"

&hpccacheblobnfstarget.HpcCacheBlobNfsTargetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CacheName: *string,
	Name: *string,
	NamespacePath: *string,
	ResourceGroupName: *string,
	StorageContainerId: *string,
	UsageModel: *string,
	AccessPolicyName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts,
	VerificationTimerInSeconds: *f64,
	WriteBackTimerInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.cacheName">CacheName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#cache_name HpcCacheBlobNfsTarget#cache_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#name HpcCacheBlobNfsTarget#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.namespacePath">NamespacePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#namespace_path HpcCacheBlobNfsTarget#namespace_path}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#resource_group_name HpcCacheBlobNfsTarget#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.storageContainerId">StorageContainerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#storage_container_id HpcCacheBlobNfsTarget#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.usageModel">UsageModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#usage_model HpcCacheBlobNfsTarget#usage_model}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.accessPolicyName">AccessPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#access_policy_name HpcCacheBlobNfsTarget#access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#id HpcCacheBlobNfsTarget#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.verificationTimerInSeconds">VerificationTimerInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#verification_timer_in_seconds HpcCacheBlobNfsTarget#verification_timer_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.writeBackTimerInSeconds">WriteBackTimerInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#write_back_timer_in_seconds HpcCacheBlobNfsTarget#write_back_timer_in_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CacheName`<sup>Required</sup> <a name="CacheName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.cacheName"></a>

```go
CacheName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#cache_name HpcCacheBlobNfsTarget#cache_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#name HpcCacheBlobNfsTarget#name}.

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.namespacePath"></a>

```go
NamespacePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#namespace_path HpcCacheBlobNfsTarget#namespace_path}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#resource_group_name HpcCacheBlobNfsTarget#resource_group_name}.

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.storageContainerId"></a>

```go
StorageContainerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#storage_container_id HpcCacheBlobNfsTarget#storage_container_id}.

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.usageModel"></a>

```go
UsageModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#usage_model HpcCacheBlobNfsTarget#usage_model}.

---

##### `AccessPolicyName`<sup>Optional</sup> <a name="AccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.accessPolicyName"></a>

```go
AccessPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#access_policy_name HpcCacheBlobNfsTarget#access_policy_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#id HpcCacheBlobNfsTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.timeouts"></a>

```go
Timeouts HpcCacheBlobNfsTargetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts">HpcCacheBlobNfsTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#timeouts HpcCacheBlobNfsTarget#timeouts}

---

##### `VerificationTimerInSeconds`<sup>Optional</sup> <a name="VerificationTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.verificationTimerInSeconds"></a>

```go
VerificationTimerInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#verification_timer_in_seconds HpcCacheBlobNfsTarget#verification_timer_in_seconds}.

---

##### `WriteBackTimerInSeconds`<sup>Optional</sup> <a name="WriteBackTimerInSeconds" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetConfig.property.writeBackTimerInSeconds"></a>

```go
WriteBackTimerInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#write_back_timer_in_seconds HpcCacheBlobNfsTarget#write_back_timer_in_seconds}.

---

### HpcCacheBlobNfsTargetTimeouts <a name="HpcCacheBlobNfsTargetTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/hpccacheblobnfstarget"

&hpccacheblobnfstarget.HpcCacheBlobNfsTargetTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#create HpcCacheBlobNfsTarget#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#delete HpcCacheBlobNfsTarget#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#read HpcCacheBlobNfsTarget#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#update HpcCacheBlobNfsTarget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#create HpcCacheBlobNfsTarget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#delete HpcCacheBlobNfsTarget#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#read HpcCacheBlobNfsTarget#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/hpc_cache_blob_nfs_target#update HpcCacheBlobNfsTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheBlobNfsTargetTimeoutsOutputReference <a name="HpcCacheBlobNfsTargetTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/hpccacheblobnfstarget"

hpccacheblobnfstarget.NewHpcCacheBlobNfsTargetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HpcCacheBlobNfsTargetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCacheBlobNfsTarget.HpcCacheBlobNfsTargetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



