# `keyVault` Submodule <a name="`keyVault` Submodule" id="@cdktf/provider-azurerm.keyVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVault <a name="KeyVault" id="@cdktf/provider-azurerm.keyVault.KeyVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault azurerm_key_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

keyvault.NewKeyVault(scope Construct, id *string, config KeyVaultConfig) KeyVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig">KeyVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVault.KeyVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig">KeyVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putAccessPolicy">PutAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putContact">PutContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls">PutNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetAccessPolicy">ResetAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetContact">ResetContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDeployment">ResetEnabledForDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDiskEncryption">ResetEnabledForDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForTemplateDeployment">ResetEnabledForTemplateDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetEnableRbacAuthorization">ResetEnableRbacAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetNetworkAcls">ResetNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetPurgeProtectionEnabled">ResetPurgeProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetSoftDeleteRetentionDays">ResetSoftDeleteRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVault.KeyVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.keyVault.KeyVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVault.KeyVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.keyVault.KeyVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVault.KeyVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.keyVault.KeyVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.keyVault.KeyVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.keyVault.KeyVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.keyVault.KeyVault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVault.KeyVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.keyVault.KeyVault.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.keyVault.KeyVault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVault.KeyVault.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVault.KeyVault.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessPolicy` <a name="PutAccessPolicy" id="@cdktf/provider-azurerm.keyVault.KeyVault.putAccessPolicy"></a>

```go
func PutAccessPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.putAccessPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutContact` <a name="PutContact" id="@cdktf/provider-azurerm.keyVault.KeyVault.putContact"></a>

```go
func PutContact(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.putContact.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkAcls` <a name="PutNetworkAcls" id="@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls"></a>

```go
func PutNetworkAcls(value KeyVaultNetworkAcls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.putNetworkAcls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts"></a>

```go
func PutTimeouts(value KeyVaultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVault.KeyVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>

---

##### `ResetAccessPolicy` <a name="ResetAccessPolicy" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetAccessPolicy"></a>

```go
func ResetAccessPolicy()
```

##### `ResetContact` <a name="ResetContact" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetContact"></a>

```go
func ResetContact()
```

##### `ResetEnabledForDeployment` <a name="ResetEnabledForDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDeployment"></a>

```go
func ResetEnabledForDeployment()
```

##### `ResetEnabledForDiskEncryption` <a name="ResetEnabledForDiskEncryption" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForDiskEncryption"></a>

```go
func ResetEnabledForDiskEncryption()
```

##### `ResetEnabledForTemplateDeployment` <a name="ResetEnabledForTemplateDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnabledForTemplateDeployment"></a>

```go
func ResetEnabledForTemplateDeployment()
```

##### `ResetEnableRbacAuthorization` <a name="ResetEnableRbacAuthorization" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetEnableRbacAuthorization"></a>

```go
func ResetEnableRbacAuthorization()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkAcls` <a name="ResetNetworkAcls" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetNetworkAcls"></a>

```go
func ResetNetworkAcls()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetPurgeProtectionEnabled` <a name="ResetPurgeProtectionEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetPurgeProtectionEnabled"></a>

```go
func ResetPurgeProtectionEnabled()
```

##### `ResetSoftDeleteRetentionDays` <a name="ResetSoftDeleteRetentionDays" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetSoftDeleteRetentionDays"></a>

```go
func ResetSoftDeleteRetentionDays()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.keyVault.KeyVault.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.keyVault.KeyVault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

keyvault.KeyVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVault.KeyVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

keyvault.KeyVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

keyvault.KeyVault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVault.KeyVault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

keyvault.KeyVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KeyVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KeyVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KeyVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVault.KeyVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KeyVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicy">AccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList">KeyVaultAccessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.contact">Contact</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList">KeyVaultContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAcls">NetworkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference">KeyVaultNetworkAclsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference">KeyVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.vaultUri">VaultUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicyInput">AccessPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.contactInput">ContactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeploymentInput">EnabledForDeploymentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryptionInput">EnabledForDiskEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeploymentInput">EnabledForTemplateDeploymentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorizationInput">EnableRbacAuthorizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAclsInput">NetworkAclsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabledInput">PurgeProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDaysInput">SoftDeleteRetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeployment">EnabledForDeployment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryption">EnabledForDiskEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeployment">EnabledForTemplateDeployment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorization">EnableRbacAuthorization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabled">PurgeProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDays">SoftDeleteRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessPolicy`<sup>Required</sup> <a name="AccessPolicy" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicy"></a>

```go
func AccessPolicy() KeyVaultAccessPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList">KeyVaultAccessPolicyList</a>

---

##### `Contact`<sup>Required</sup> <a name="Contact" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.contact"></a>

```go
func Contact() KeyVaultContactList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList">KeyVaultContactList</a>

---

##### `NetworkAcls`<sup>Required</sup> <a name="NetworkAcls" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAcls"></a>

```go
func NetworkAcls() KeyVaultNetworkAclsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference">KeyVaultNetworkAclsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.timeouts"></a>

```go
func Timeouts() KeyVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference">KeyVaultTimeoutsOutputReference</a>

---

##### `VaultUri`<sup>Required</sup> <a name="VaultUri" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.vaultUri"></a>

```go
func VaultUri() *string
```

- *Type:* *string

---

##### `AccessPolicyInput`<sup>Optional</sup> <a name="AccessPolicyInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.accessPolicyInput"></a>

```go
func AccessPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `ContactInput`<sup>Optional</sup> <a name="ContactInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.contactInput"></a>

```go
func ContactInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledForDeploymentInput`<sup>Optional</sup> <a name="EnabledForDeploymentInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeploymentInput"></a>

```go
func EnabledForDeploymentInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledForDiskEncryptionInput`<sup>Optional</sup> <a name="EnabledForDiskEncryptionInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryptionInput"></a>

```go
func EnabledForDiskEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledForTemplateDeploymentInput`<sup>Optional</sup> <a name="EnabledForTemplateDeploymentInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeploymentInput"></a>

```go
func EnabledForTemplateDeploymentInput() interface{}
```

- *Type:* interface{}

---

##### `EnableRbacAuthorizationInput`<sup>Optional</sup> <a name="EnableRbacAuthorizationInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorizationInput"></a>

```go
func EnableRbacAuthorizationInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkAclsInput`<sup>Optional</sup> <a name="NetworkAclsInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.networkAclsInput"></a>

```go
func NetworkAclsInput() KeyVaultNetworkAcls
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PurgeProtectionEnabledInput`<sup>Optional</sup> <a name="PurgeProtectionEnabledInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabledInput"></a>

```go
func PurgeProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `SoftDeleteRetentionDaysInput`<sup>Optional</sup> <a name="SoftDeleteRetentionDaysInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDaysInput"></a>

```go
func SoftDeleteRetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledForDeployment`<sup>Required</sup> <a name="EnabledForDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDeployment"></a>

```go
func EnabledForDeployment() interface{}
```

- *Type:* interface{}

---

##### `EnabledForDiskEncryption`<sup>Required</sup> <a name="EnabledForDiskEncryption" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForDiskEncryption"></a>

```go
func EnabledForDiskEncryption() interface{}
```

- *Type:* interface{}

---

##### `EnabledForTemplateDeployment`<sup>Required</sup> <a name="EnabledForTemplateDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enabledForTemplateDeployment"></a>

```go
func EnabledForTemplateDeployment() interface{}
```

- *Type:* interface{}

---

##### `EnableRbacAuthorization`<sup>Required</sup> <a name="EnableRbacAuthorization" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.enableRbacAuthorization"></a>

```go
func EnableRbacAuthorization() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `PurgeProtectionEnabled`<sup>Required</sup> <a name="PurgeProtectionEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.purgeProtectionEnabled"></a>

```go
func PurgeProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `SoftDeleteRetentionDays`<sup>Required</sup> <a name="SoftDeleteRetentionDays" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.softDeleteRetentionDays"></a>

```go
func SoftDeleteRetentionDays() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.keyVault.KeyVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultAccessPolicy <a name="KeyVaultAccessPolicy" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

&keyvault.KeyVaultAccessPolicy {
	ApplicationId: *string,
	CertificatePermissions: *[]*string,
	KeyPermissions: *[]*string,
	ObjectId: *string,
	SecretPermissions: *[]*string,
	StoragePermissions: *[]*string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#application_id KeyVault#application_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.certificatePermissions">CertificatePermissions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#certificate_permissions KeyVault#certificate_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.keyPermissions">KeyPermissions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#key_permissions KeyVault#key_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#object_id KeyVault#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.secretPermissions">SecretPermissions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#secret_permissions KeyVault#secret_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.storagePermissions">StoragePermissions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#storage_permissions KeyVault#storage_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}. |

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#application_id KeyVault#application_id}.

---

##### `CertificatePermissions`<sup>Optional</sup> <a name="CertificatePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.certificatePermissions"></a>

```go
CertificatePermissions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#certificate_permissions KeyVault#certificate_permissions}.

---

##### `KeyPermissions`<sup>Optional</sup> <a name="KeyPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.keyPermissions"></a>

```go
KeyPermissions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#key_permissions KeyVault#key_permissions}.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#object_id KeyVault#object_id}.

---

##### `SecretPermissions`<sup>Optional</sup> <a name="SecretPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.secretPermissions"></a>

```go
SecretPermissions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#secret_permissions KeyVault#secret_permissions}.

---

##### `StoragePermissions`<sup>Optional</sup> <a name="StoragePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.storagePermissions"></a>

```go
StoragePermissions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#storage_permissions KeyVault#storage_permissions}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicy.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}.

---

### KeyVaultConfig <a name="KeyVaultConfig" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

&keyvault.KeyVaultConfig {
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
	SkuName: *string,
	TenantId: *string,
	AccessPolicy: interface{},
	Contact: interface{},
	EnabledForDeployment: interface{},
	EnabledForDiskEncryption: interface{},
	EnabledForTemplateDeployment: interface{},
	EnableRbacAuthorization: interface{},
	Id: *string,
	NetworkAcls: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.keyVault.KeyVaultNetworkAcls,
	PublicNetworkAccessEnabled: interface{},
	PurgeProtectionEnabled: interface{},
	SoftDeleteRetentionDays: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.keyVault.KeyVaultTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#location KeyVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#name KeyVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#resource_group_name KeyVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#sku_name KeyVault#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.accessPolicy">AccessPolicy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#access_policy KeyVault#access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.contact">Contact</a></code> | <code>interface{}</code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDeployment">EnabledForDeployment</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#enabled_for_deployment KeyVault#enabled_for_deployment}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDiskEncryption">EnabledForDiskEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForTemplateDeployment">EnabledForTemplateDeployment</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enableRbacAuthorization">EnableRbacAuthorization</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#enable_rbac_authorization KeyVault#enable_rbac_authorization}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#id KeyVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.networkAcls">NetworkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#public_network_access_enabled KeyVault#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.purgeProtectionEnabled">PurgeProtectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#purge_protection_enabled KeyVault#purge_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.softDeleteRetentionDays">SoftDeleteRetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#soft_delete_retention_days KeyVault#soft_delete_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#tags KeyVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#location KeyVault#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#name KeyVault#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#resource_group_name KeyVault#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#sku_name KeyVault#sku_name}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#tenant_id KeyVault#tenant_id}.

---

##### `AccessPolicy`<sup>Optional</sup> <a name="AccessPolicy" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.accessPolicy"></a>

```go
AccessPolicy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#access_policy KeyVault#access_policy}.

---

##### `Contact`<sup>Optional</sup> <a name="Contact" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.contact"></a>

```go
Contact interface{}
```

- *Type:* interface{}

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#contact KeyVault#contact}

---

##### `EnabledForDeployment`<sup>Optional</sup> <a name="EnabledForDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDeployment"></a>

```go
EnabledForDeployment interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#enabled_for_deployment KeyVault#enabled_for_deployment}.

---

##### `EnabledForDiskEncryption`<sup>Optional</sup> <a name="EnabledForDiskEncryption" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForDiskEncryption"></a>

```go
EnabledForDiskEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}.

---

##### `EnabledForTemplateDeployment`<sup>Optional</sup> <a name="EnabledForTemplateDeployment" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enabledForTemplateDeployment"></a>

```go
EnabledForTemplateDeployment interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}.

---

##### `EnableRbacAuthorization`<sup>Optional</sup> <a name="EnableRbacAuthorization" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.enableRbacAuthorization"></a>

```go
EnableRbacAuthorization interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#enable_rbac_authorization KeyVault#enable_rbac_authorization}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#id KeyVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkAcls`<sup>Optional</sup> <a name="NetworkAcls" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.networkAcls"></a>

```go
NetworkAcls KeyVaultNetworkAcls
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#network_acls KeyVault#network_acls}

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#public_network_access_enabled KeyVault#public_network_access_enabled}.

---

##### `PurgeProtectionEnabled`<sup>Optional</sup> <a name="PurgeProtectionEnabled" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.purgeProtectionEnabled"></a>

```go
PurgeProtectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#purge_protection_enabled KeyVault#purge_protection_enabled}.

---

##### `SoftDeleteRetentionDays`<sup>Optional</sup> <a name="SoftDeleteRetentionDays" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.softDeleteRetentionDays"></a>

```go
SoftDeleteRetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#soft_delete_retention_days KeyVault#soft_delete_retention_days}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#tags KeyVault#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVault.KeyVaultConfig.property.timeouts"></a>

```go
Timeouts KeyVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts">KeyVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#timeouts KeyVault#timeouts}

---

### KeyVaultContact <a name="KeyVaultContact" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

&keyvault.KeyVaultContact {
	Email: *string,
	Name: *string,
	Phone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#email KeyVault#email}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#name KeyVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.phone">Phone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#phone KeyVault#phone}. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#email KeyVault#email}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#name KeyVault#name}.

---

##### `Phone`<sup>Optional</sup> <a name="Phone" id="@cdktf/provider-azurerm.keyVault.KeyVaultContact.property.phone"></a>

```go
Phone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#phone KeyVault#phone}.

---

### KeyVaultNetworkAcls <a name="KeyVaultNetworkAcls" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

&keyvault.KeyVaultNetworkAcls {
	Bypass: *string,
	DefaultAction: *string,
	IpRules: *[]*string,
	VirtualNetworkSubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.bypass">Bypass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#bypass KeyVault#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#default_action KeyVault#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.ipRules">IpRules</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#ip_rules KeyVault#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#virtual_network_subnet_ids KeyVault#virtual_network_subnet_ids}. |

---

##### `Bypass`<sup>Required</sup> <a name="Bypass" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.bypass"></a>

```go
Bypass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#bypass KeyVault#bypass}.

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.defaultAction"></a>

```go
DefaultAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#default_action KeyVault#default_action}.

---

##### `IpRules`<sup>Optional</sup> <a name="IpRules" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.ipRules"></a>

```go
IpRules *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#ip_rules KeyVault#ip_rules}.

---

##### `VirtualNetworkSubnetIds`<sup>Optional</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls.property.virtualNetworkSubnetIds"></a>

```go
VirtualNetworkSubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#virtual_network_subnet_ids KeyVault#virtual_network_subnet_ids}.

---

### KeyVaultTimeouts <a name="KeyVaultTimeouts" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

&keyvault.KeyVaultTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#create KeyVault#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#delete KeyVault#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#read KeyVault#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#update KeyVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#create KeyVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#delete KeyVault#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#read KeyVault#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/key_vault#update KeyVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultAccessPolicyList <a name="KeyVaultAccessPolicyList" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

keyvault.NewKeyVaultAccessPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KeyVaultAccessPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.get"></a>

```go
func Get(index *f64) KeyVaultAccessPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyVaultAccessPolicyOutputReference <a name="KeyVaultAccessPolicyOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

keyvault.NewKeyVaultAccessPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KeyVaultAccessPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetCertificatePermissions">ResetCertificatePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetKeyPermissions">ResetKeyPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetObjectId">ResetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetSecretPermissions">ResetSecretPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetStoragePermissions">ResetStoragePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetApplicationId"></a>

```go
func ResetApplicationId()
```

##### `ResetCertificatePermissions` <a name="ResetCertificatePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetCertificatePermissions"></a>

```go
func ResetCertificatePermissions()
```

##### `ResetKeyPermissions` <a name="ResetKeyPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetKeyPermissions"></a>

```go
func ResetKeyPermissions()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetObjectId"></a>

```go
func ResetObjectId()
```

##### `ResetSecretPermissions` <a name="ResetSecretPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetSecretPermissions"></a>

```go
func ResetSecretPermissions()
```

##### `ResetStoragePermissions` <a name="ResetStoragePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetStoragePermissions"></a>

```go
func ResetStoragePermissions()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissionsInput">CertificatePermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissionsInput">KeyPermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissionsInput">SecretPermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissionsInput">StoragePermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissions">CertificatePermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissions">KeyPermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissions">SecretPermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissions">StoragePermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `CertificatePermissionsInput`<sup>Optional</sup> <a name="CertificatePermissionsInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissionsInput"></a>

```go
func CertificatePermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeyPermissionsInput`<sup>Optional</sup> <a name="KeyPermissionsInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissionsInput"></a>

```go
func KeyPermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `SecretPermissionsInput`<sup>Optional</sup> <a name="SecretPermissionsInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissionsInput"></a>

```go
func SecretPermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StoragePermissionsInput`<sup>Optional</sup> <a name="StoragePermissionsInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissionsInput"></a>

```go
func StoragePermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `CertificatePermissions`<sup>Required</sup> <a name="CertificatePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.certificatePermissions"></a>

```go
func CertificatePermissions() *[]*string
```

- *Type:* *[]*string

---

##### `KeyPermissions`<sup>Required</sup> <a name="KeyPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.keyPermissions"></a>

```go
func KeyPermissions() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `SecretPermissions`<sup>Required</sup> <a name="SecretPermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.secretPermissions"></a>

```go
func SecretPermissions() *[]*string
```

- *Type:* *[]*string

---

##### `StoragePermissions`<sup>Required</sup> <a name="StoragePermissions" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.storagePermissions"></a>

```go
func StoragePermissions() *[]*string
```

- *Type:* *[]*string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultAccessPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyVaultContactList <a name="KeyVaultContactList" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

keyvault.NewKeyVaultContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KeyVaultContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.get"></a>

```go
func Get(index *f64) KeyVaultContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyVaultContactOutputReference <a name="KeyVaultContactOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

keyvault.NewKeyVaultContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KeyVaultContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetPhone">ResetPhone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPhone` <a name="ResetPhone" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.resetPhone"></a>

```go
func ResetPhone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phoneInput">PhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhoneInput`<sup>Optional</sup> <a name="PhoneInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phoneInput"></a>

```go
func PhoneInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultContactOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyVaultNetworkAclsOutputReference <a name="KeyVaultNetworkAclsOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

keyvault.NewKeyVaultNetworkAclsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultNetworkAclsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetIpRules">ResetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetVirtualNetworkSubnetIds">ResetVirtualNetworkSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpRules` <a name="ResetIpRules" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetIpRules"></a>

```go
func ResetIpRules()
```

##### `ResetVirtualNetworkSubnetIds` <a name="ResetVirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.resetVirtualNetworkSubnetIds"></a>

```go
func ResetVirtualNetworkSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypassInput">BypassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRulesInput">IpRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIdsInput">VirtualNetworkSubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypass">Bypass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRules">IpRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BypassInput`<sup>Optional</sup> <a name="BypassInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypassInput"></a>

```go
func BypassInput() *string
```

- *Type:* *string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultActionInput"></a>

```go
func DefaultActionInput() *string
```

- *Type:* *string

---

##### `IpRulesInput`<sup>Optional</sup> <a name="IpRulesInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRulesInput"></a>

```go
func IpRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualNetworkSubnetIdsInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdsInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIdsInput"></a>

```go
func VirtualNetworkSubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Bypass`<sup>Required</sup> <a name="Bypass" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.bypass"></a>

```go
func Bypass() *string
```

- *Type:* *string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.defaultAction"></a>

```go
func DefaultAction() *string
```

- *Type:* *string

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.ipRules"></a>

```go
func IpRules() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualNetworkSubnetIds`<sup>Required</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.virtualNetworkSubnetIds"></a>

```go
func VirtualNetworkSubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAclsOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultNetworkAcls
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVault.KeyVaultNetworkAcls">KeyVaultNetworkAcls</a>

---


### KeyVaultTimeoutsOutputReference <a name="KeyVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvault"

keyvault.NewKeyVaultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVault.KeyVaultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



