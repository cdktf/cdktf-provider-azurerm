# `batchAccount` Submodule <a name="`batchAccount` Submodule" id="@cdktf/provider-azurerm.batchAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchAccount <a name="BatchAccount" id="@cdktf/provider-azurerm.batchAccount.BatchAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account azurerm_batch_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccount(scope Construct, id *string, config BatchAccountConfig) BatchAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig">BatchAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig">BatchAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putKeyVaultReference">PutKeyVaultReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putNetworkProfile">PutNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetAllowedAuthenticationModes">ResetAllowedAuthenticationModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetKeyVaultReference">ResetKeyVaultReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetNetworkProfile">ResetNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPoolAllocationMode">ResetPoolAllocationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountAuthenticationMode">ResetStorageAccountAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountNodeIdentity">ResetStorageAccountNodeIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putEncryption"></a>

```go
func PutEncryption(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putEncryption.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putIdentity"></a>

```go
func PutIdentity(value BatchAccountIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

---

##### `PutKeyVaultReference` <a name="PutKeyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putKeyVaultReference"></a>

```go
func PutKeyVaultReference(value BatchAccountKeyVaultReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putKeyVaultReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

---

##### `PutNetworkProfile` <a name="PutNetworkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putNetworkProfile"></a>

```go
func PutNetworkProfile(value BatchAccountNetworkProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts"></a>

```go
func PutTimeouts(value BatchAccountTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>

---

##### `ResetAllowedAuthenticationModes` <a name="ResetAllowedAuthenticationModes" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetAllowedAuthenticationModes"></a>

```go
func ResetAllowedAuthenticationModes()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetKeyVaultReference` <a name="ResetKeyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetKeyVaultReference"></a>

```go
func ResetKeyVaultReference()
```

##### `ResetNetworkProfile` <a name="ResetNetworkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetNetworkProfile"></a>

```go
func ResetNetworkProfile()
```

##### `ResetPoolAllocationMode` <a name="ResetPoolAllocationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPoolAllocationMode"></a>

```go
func ResetPoolAllocationMode()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetStorageAccountAuthenticationMode` <a name="ResetStorageAccountAuthenticationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountAuthenticationMode"></a>

```go
func ResetStorageAccountAuthenticationMode()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountId"></a>

```go
func ResetStorageAccountId()
```

##### `ResetStorageAccountNodeIdentity` <a name="ResetStorageAccountNodeIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetStorageAccountNodeIdentity"></a>

```go
func ResetStorageAccountNodeIdentity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BatchAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.BatchAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.BatchAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.BatchAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.BatchAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BatchAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BatchAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BatchAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BatchAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.accountEndpoint">AccountEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList">BatchAccountEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference">BatchAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReference">KeyVaultReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference">BatchAccountKeyVaultReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfile">NetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference">BatchAccountNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference">BatchAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModesInput">AllowedAuthenticationModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryptionInput">EncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReferenceInput">KeyVaultReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfileInput">NetworkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationModeInput">PoolAllocationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationModeInput">StorageAccountAuthenticationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentityInput">StorageAccountNodeIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModes">AllowedAuthenticationModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationMode">PoolAllocationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationMode">StorageAccountAuthenticationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentity">StorageAccountNodeIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountEndpoint`<sup>Required</sup> <a name="AccountEndpoint" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.accountEndpoint"></a>

```go
func AccountEndpoint() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryption"></a>

```go
func Encryption() BatchAccountEncryptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList">BatchAccountEncryptionList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identity"></a>

```go
func Identity() BatchAccountIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference">BatchAccountIdentityOutputReference</a>

---

##### `KeyVaultReference`<sup>Required</sup> <a name="KeyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReference"></a>

```go
func KeyVaultReference() BatchAccountKeyVaultReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference">BatchAccountKeyVaultReferenceOutputReference</a>

---

##### `NetworkProfile`<sup>Required</sup> <a name="NetworkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfile"></a>

```go
func NetworkProfile() BatchAccountNetworkProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference">BatchAccountNetworkProfileOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.primaryAccessKey"></a>

```go
func PrimaryAccessKey() *string
```

- *Type:* *string

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.secondaryAccessKey"></a>

```go
func SecondaryAccessKey() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeouts"></a>

```go
func Timeouts() BatchAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference">BatchAccountTimeoutsOutputReference</a>

---

##### `AllowedAuthenticationModesInput`<sup>Optional</sup> <a name="AllowedAuthenticationModesInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModesInput"></a>

```go
func AllowedAuthenticationModesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.encryptionInput"></a>

```go
func EncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.identityInput"></a>

```go
func IdentityInput() BatchAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultReferenceInput`<sup>Optional</sup> <a name="KeyVaultReferenceInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.keyVaultReferenceInput"></a>

```go
func KeyVaultReferenceInput() BatchAccountKeyVaultReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkProfileInput`<sup>Optional</sup> <a name="NetworkProfileInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.networkProfileInput"></a>

```go
func NetworkProfileInput() BatchAccountNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

---

##### `PoolAllocationModeInput`<sup>Optional</sup> <a name="PoolAllocationModeInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationModeInput"></a>

```go
func PoolAllocationModeInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `StorageAccountAuthenticationModeInput`<sup>Optional</sup> <a name="StorageAccountAuthenticationModeInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationModeInput"></a>

```go
func StorageAccountAuthenticationModeInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `StorageAccountNodeIdentityInput`<sup>Optional</sup> <a name="StorageAccountNodeIdentityInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentityInput"></a>

```go
func StorageAccountNodeIdentityInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedAuthenticationModes`<sup>Required</sup> <a name="AllowedAuthenticationModes" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.allowedAuthenticationModes"></a>

```go
func AllowedAuthenticationModes() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PoolAllocationMode`<sup>Required</sup> <a name="PoolAllocationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.poolAllocationMode"></a>

```go
func PoolAllocationMode() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StorageAccountAuthenticationMode`<sup>Required</sup> <a name="StorageAccountAuthenticationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountAuthenticationMode"></a>

```go
func StorageAccountAuthenticationMode() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `StorageAccountNodeIdentity`<sup>Required</sup> <a name="StorageAccountNodeIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.storageAccountNodeIdentity"></a>

```go
func StorageAccountNodeIdentity() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.batchAccount.BatchAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchAccountConfig <a name="BatchAccountConfig" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

&batchaccount.BatchAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	AllowedAuthenticationModes: *[]*string,
	Encryption: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.batchAccount.BatchAccountIdentity,
	KeyVaultReference: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.batchAccount.BatchAccountKeyVaultReference,
	NetworkProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.batchAccount.BatchAccountNetworkProfile,
	PoolAllocationMode: *string,
	PublicNetworkAccessEnabled: interface{},
	StorageAccountAuthenticationMode: *string,
	StorageAccountId: *string,
	StorageAccountNodeIdentity: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.batchAccount.BatchAccountTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#location BatchAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#name BatchAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#resource_group_name BatchAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.allowedAuthenticationModes">AllowedAuthenticationModes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#allowed_authentication_modes BatchAccount#allowed_authentication_modes}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.encryption">Encryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#encryption BatchAccount#encryption}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#id BatchAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.keyVaultReference">KeyVaultReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a></code> | key_vault_reference block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.networkProfile">NetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.poolAllocationMode">PoolAllocationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#pool_allocation_mode BatchAccount#pool_allocation_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#public_network_access_enabled BatchAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountAuthenticationMode">StorageAccountAuthenticationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#storage_account_authentication_mode BatchAccount#storage_account_authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#storage_account_id BatchAccount#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountNodeIdentity">StorageAccountNodeIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#storage_account_node_identity BatchAccount#storage_account_node_identity}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#tags BatchAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#location BatchAccount#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#name BatchAccount#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#resource_group_name BatchAccount#resource_group_name}.

---

##### `AllowedAuthenticationModes`<sup>Optional</sup> <a name="AllowedAuthenticationModes" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.allowedAuthenticationModes"></a>

```go
AllowedAuthenticationModes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#allowed_authentication_modes BatchAccount#allowed_authentication_modes}.

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.encryption"></a>

```go
Encryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#encryption BatchAccount#encryption}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#id BatchAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.identity"></a>

```go
Identity BatchAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#identity BatchAccount#identity}

---

##### `KeyVaultReference`<sup>Optional</sup> <a name="KeyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.keyVaultReference"></a>

```go
KeyVaultReference BatchAccountKeyVaultReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

key_vault_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#key_vault_reference BatchAccount#key_vault_reference}

---

##### `NetworkProfile`<sup>Optional</sup> <a name="NetworkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.networkProfile"></a>

```go
NetworkProfile BatchAccountNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#network_profile BatchAccount#network_profile}

---

##### `PoolAllocationMode`<sup>Optional</sup> <a name="PoolAllocationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.poolAllocationMode"></a>

```go
PoolAllocationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#pool_allocation_mode BatchAccount#pool_allocation_mode}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#public_network_access_enabled BatchAccount#public_network_access_enabled}.

---

##### `StorageAccountAuthenticationMode`<sup>Optional</sup> <a name="StorageAccountAuthenticationMode" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountAuthenticationMode"></a>

```go
StorageAccountAuthenticationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#storage_account_authentication_mode BatchAccount#storage_account_authentication_mode}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#storage_account_id BatchAccount#storage_account_id}.

---

##### `StorageAccountNodeIdentity`<sup>Optional</sup> <a name="StorageAccountNodeIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.storageAccountNodeIdentity"></a>

```go
StorageAccountNodeIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#storage_account_node_identity BatchAccount#storage_account_node_identity}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#tags BatchAccount#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccountConfig.property.timeouts"></a>

```go
Timeouts BatchAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts">BatchAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#timeouts BatchAccount#timeouts}

---

### BatchAccountEncryption <a name="BatchAccountEncryption" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

&batchaccount.BatchAccountEncryption {
	KeyVaultKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#key_vault_key_id BatchAccount#key_vault_key_id}. |

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryption.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#key_vault_key_id BatchAccount#key_vault_key_id}.

---

### BatchAccountIdentity <a name="BatchAccountIdentity" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

&batchaccount.BatchAccountIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#type BatchAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#identity_ids BatchAccount#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#type BatchAccount#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#identity_ids BatchAccount#identity_ids}.

---

### BatchAccountKeyVaultReference <a name="BatchAccountKeyVaultReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

&batchaccount.BatchAccountKeyVaultReference {
	Id: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#id BatchAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#url BatchAccount#url}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#id BatchAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#url BatchAccount#url}.

---

### BatchAccountNetworkProfile <a name="BatchAccountNetworkProfile" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

&batchaccount.BatchAccountNetworkProfile {
	AccountAccess: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.batchAccount.BatchAccountNetworkProfileAccountAccess,
	NodeManagementAccess: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.batchAccount.BatchAccountNetworkProfileNodeManagementAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.accountAccess">AccountAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a></code> | account_access block. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.nodeManagementAccess">NodeManagementAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a></code> | node_management_access block. |

---

##### `AccountAccess`<sup>Optional</sup> <a name="AccountAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.accountAccess"></a>

```go
AccountAccess BatchAccountNetworkProfileAccountAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

account_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#account_access BatchAccount#account_access}

---

##### `NodeManagementAccess`<sup>Optional</sup> <a name="NodeManagementAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile.property.nodeManagementAccess"></a>

```go
NodeManagementAccess BatchAccountNetworkProfileNodeManagementAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

node_management_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#node_management_access BatchAccount#node_management_access}

---

### BatchAccountNetworkProfileAccountAccess <a name="BatchAccountNetworkProfileAccountAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

&batchaccount.BatchAccountNetworkProfileAccountAccess {
	DefaultAction: *string,
	IpRule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#default_action BatchAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.ipRule">IpRule</a></code> | <code>interface{}</code> | ip_rule block. |

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.defaultAction"></a>

```go
DefaultAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#default_action BatchAccount#default_action}.

---

##### `IpRule`<sup>Optional</sup> <a name="IpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess.property.ipRule"></a>

```go
IpRule interface{}
```

- *Type:* interface{}

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#ip_rule BatchAccount#ip_rule}

---

### BatchAccountNetworkProfileAccountAccessIpRule <a name="BatchAccountNetworkProfileAccountAccessIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

&batchaccount.BatchAccountNetworkProfileAccountAccessIpRule {
	IpRange: *string,
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.ipRange">IpRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#action BatchAccount#action}. |

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.ipRange"></a>

```go
IpRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRule.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#action BatchAccount#action}.

---

### BatchAccountNetworkProfileNodeManagementAccess <a name="BatchAccountNetworkProfileNodeManagementAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

&batchaccount.BatchAccountNetworkProfileNodeManagementAccess {
	DefaultAction: *string,
	IpRule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#default_action BatchAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.ipRule">IpRule</a></code> | <code>interface{}</code> | ip_rule block. |

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.defaultAction"></a>

```go
DefaultAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#default_action BatchAccount#default_action}.

---

##### `IpRule`<sup>Optional</sup> <a name="IpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess.property.ipRule"></a>

```go
IpRule interface{}
```

- *Type:* interface{}

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#ip_rule BatchAccount#ip_rule}

---

### BatchAccountNetworkProfileNodeManagementAccessIpRule <a name="BatchAccountNetworkProfileNodeManagementAccessIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

&batchaccount.BatchAccountNetworkProfileNodeManagementAccessIpRule {
	IpRange: *string,
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.ipRange">IpRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#action BatchAccount#action}. |

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.ipRange"></a>

```go
IpRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRule.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#action BatchAccount#action}.

---

### BatchAccountTimeouts <a name="BatchAccountTimeouts" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

&batchaccount.BatchAccountTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#create BatchAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#delete BatchAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#read BatchAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#update BatchAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#create BatchAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#delete BatchAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#read BatchAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/batch_account#update BatchAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchAccountEncryptionList <a name="BatchAccountEncryptionList" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountEncryptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BatchAccountEncryptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.get"></a>

```go
func Get(index *f64) BatchAccountEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchAccountEncryptionOutputReference <a name="BatchAccountEncryptionOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BatchAccountEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.resetKeyVaultKeyId"></a>

```go
func ResetKeyVaultKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchAccountIdentityOutputReference <a name="BatchAccountIdentityOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchAccountIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() BatchAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountIdentity">BatchAccountIdentity</a>

---


### BatchAccountKeyVaultReferenceOutputReference <a name="BatchAccountKeyVaultReferenceOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountKeyVaultReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchAccountKeyVaultReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() BatchAccountKeyVaultReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountKeyVaultReference">BatchAccountKeyVaultReference</a>

---


### BatchAccountNetworkProfileAccountAccessIpRuleList <a name="BatchAccountNetworkProfileAccountAccessIpRuleList" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountNetworkProfileAccountAccessIpRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BatchAccountNetworkProfileAccountAccessIpRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.get"></a>

```go
func Get(index *f64) BatchAccountNetworkProfileAccountAccessIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchAccountNetworkProfileAccountAccessIpRuleOutputReference <a name="BatchAccountNetworkProfileAccountAccessIpRuleOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountNetworkProfileAccountAccessIpRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BatchAccountNetworkProfileAccountAccessIpRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.resetAction"></a>

```go
func ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRangeInput">IpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRange">IpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRangeInput"></a>

```go
func IpRangeInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.ipRange"></a>

```go
func IpRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchAccountNetworkProfileAccountAccessOutputReference <a name="BatchAccountNetworkProfileAccountAccessOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountNetworkProfileAccountAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchAccountNetworkProfileAccountAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.putIpRule">PutIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetIpRule">ResetIpRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpRule` <a name="PutIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.putIpRule"></a>

```go
func PutIpRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.putIpRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetDefaultAction"></a>

```go
func ResetDefaultAction()
```

##### `ResetIpRule` <a name="ResetIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.resetIpRule"></a>

```go
func ResetIpRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRule">IpRule</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList">BatchAccountNetworkProfileAccountAccessIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRuleInput">IpRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpRule`<sup>Required</sup> <a name="IpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRule"></a>

```go
func IpRule() BatchAccountNetworkProfileAccountAccessIpRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessIpRuleList">BatchAccountNetworkProfileAccountAccessIpRuleList</a>

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultActionInput"></a>

```go
func DefaultActionInput() *string
```

- *Type:* *string

---

##### `IpRuleInput`<sup>Optional</sup> <a name="IpRuleInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.ipRuleInput"></a>

```go
func IpRuleInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.defaultAction"></a>

```go
func DefaultAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() BatchAccountNetworkProfileAccountAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

---


### BatchAccountNetworkProfileNodeManagementAccessIpRuleList <a name="BatchAccountNetworkProfileNodeManagementAccessIpRuleList" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountNetworkProfileNodeManagementAccessIpRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BatchAccountNetworkProfileNodeManagementAccessIpRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.get"></a>

```go
func Get(index *f64) BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference <a name="BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.resetAction"></a>

```go
func ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRangeInput">IpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRange">IpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRangeInput"></a>

```go
func IpRangeInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.ipRange"></a>

```go
func IpRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchAccountNetworkProfileNodeManagementAccessOutputReference <a name="BatchAccountNetworkProfileNodeManagementAccessOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountNetworkProfileNodeManagementAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchAccountNetworkProfileNodeManagementAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.putIpRule">PutIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetIpRule">ResetIpRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpRule` <a name="PutIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.putIpRule"></a>

```go
func PutIpRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.putIpRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetDefaultAction"></a>

```go
func ResetDefaultAction()
```

##### `ResetIpRule` <a name="ResetIpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.resetIpRule"></a>

```go
func ResetIpRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRule">IpRule</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList">BatchAccountNetworkProfileNodeManagementAccessIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRuleInput">IpRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpRule`<sup>Required</sup> <a name="IpRule" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRule"></a>

```go
func IpRule() BatchAccountNetworkProfileNodeManagementAccessIpRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessIpRuleList">BatchAccountNetworkProfileNodeManagementAccessIpRuleList</a>

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultActionInput"></a>

```go
func DefaultActionInput() *string
```

- *Type:* *string

---

##### `IpRuleInput`<sup>Optional</sup> <a name="IpRuleInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.ipRuleInput"></a>

```go
func IpRuleInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.defaultAction"></a>

```go
func DefaultAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() BatchAccountNetworkProfileNodeManagementAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

---


### BatchAccountNetworkProfileOutputReference <a name="BatchAccountNetworkProfileOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountNetworkProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchAccountNetworkProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putAccountAccess">PutAccountAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putNodeManagementAccess">PutNodeManagementAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetAccountAccess">ResetAccountAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetNodeManagementAccess">ResetNodeManagementAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccountAccess` <a name="PutAccountAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putAccountAccess"></a>

```go
func PutAccountAccess(value BatchAccountNetworkProfileAccountAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putAccountAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

---

##### `PutNodeManagementAccess` <a name="PutNodeManagementAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putNodeManagementAccess"></a>

```go
func PutNodeManagementAccess(value BatchAccountNetworkProfileNodeManagementAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.putNodeManagementAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

---

##### `ResetAccountAccess` <a name="ResetAccountAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetAccountAccess"></a>

```go
func ResetAccountAccess()
```

##### `ResetNodeManagementAccess` <a name="ResetNodeManagementAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.resetNodeManagementAccess"></a>

```go
func ResetNodeManagementAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccess">AccountAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference">BatchAccountNetworkProfileAccountAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccess">NodeManagementAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference">BatchAccountNetworkProfileNodeManagementAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccessInput">AccountAccessInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccessInput">NodeManagementAccessInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountAccess`<sup>Required</sup> <a name="AccountAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccess"></a>

```go
func AccountAccess() BatchAccountNetworkProfileAccountAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccessOutputReference">BatchAccountNetworkProfileAccountAccessOutputReference</a>

---

##### `NodeManagementAccess`<sup>Required</sup> <a name="NodeManagementAccess" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccess"></a>

```go
func NodeManagementAccess() BatchAccountNetworkProfileNodeManagementAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccessOutputReference">BatchAccountNetworkProfileNodeManagementAccessOutputReference</a>

---

##### `AccountAccessInput`<sup>Optional</sup> <a name="AccountAccessInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.accountAccessInput"></a>

```go
func AccountAccessInput() BatchAccountNetworkProfileAccountAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileAccountAccess">BatchAccountNetworkProfileAccountAccess</a>

---

##### `NodeManagementAccessInput`<sup>Optional</sup> <a name="NodeManagementAccessInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.nodeManagementAccessInput"></a>

```go
func NodeManagementAccessInput() BatchAccountNetworkProfileNodeManagementAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileNodeManagementAccess">BatchAccountNetworkProfileNodeManagementAccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() BatchAccountNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountNetworkProfile">BatchAccountNetworkProfile</a>

---


### BatchAccountTimeoutsOutputReference <a name="BatchAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/batchaccount"

batchaccount.NewBatchAccountTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchAccountTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchAccount.BatchAccountTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



