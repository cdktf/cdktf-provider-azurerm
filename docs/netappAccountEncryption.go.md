# `netappAccountEncryption` Submodule <a name="`netappAccountEncryption` Submodule" id="@cdktf/provider-azurerm.netappAccountEncryption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappAccountEncryption <a name="NetappAccountEncryption" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption azurerm_netapp_account_encryption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappaccountencryption"

netappaccountencryption.NewNetappAccountEncryption(scope Construct, id *string, config NetappAccountEncryptionConfig) NetappAccountEncryption
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig">NetappAccountEncryptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig">NetappAccountEncryptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetCrossTenantKeyVaultResourceId">ResetCrossTenantKeyVaultResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetFederatedClientId">ResetFederatedClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetSystemAssignedIdentityPrincipalId">ResetSystemAssignedIdentityPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts"></a>

```go
func PutTimeouts(value NetappAccountEncryptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>

---

##### `ResetCrossTenantKeyVaultResourceId` <a name="ResetCrossTenantKeyVaultResourceId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetCrossTenantKeyVaultResourceId"></a>

```go
func ResetCrossTenantKeyVaultResourceId()
```

##### `ResetFederatedClientId` <a name="ResetFederatedClientId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetFederatedClientId"></a>

```go
func ResetFederatedClientId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetId"></a>

```go
func ResetId()
```

##### `ResetSystemAssignedIdentityPrincipalId` <a name="ResetSystemAssignedIdentityPrincipalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetSystemAssignedIdentityPrincipalId"></a>

```go
func ResetSystemAssignedIdentityPrincipalId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.resetUserAssignedIdentityId"></a>

```go
func ResetUserAssignedIdentityId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetappAccountEncryption resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappaccountencryption"

netappaccountencryption.NetappAccountEncryption_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappaccountencryption"

netappaccountencryption.NetappAccountEncryption_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappaccountencryption"

netappaccountencryption.NetappAccountEncryption_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappaccountencryption"

netappaccountencryption.NetappAccountEncryption_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetappAccountEncryption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetappAccountEncryption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetappAccountEncryption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetappAccountEncryption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference">NetappAccountEncryptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.crossTenantKeyVaultResourceIdInput">CrossTenantKeyVaultResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.federatedClientIdInput">FederatedClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountIdInput">NetappAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalIdInput">SystemAssignedIdentityPrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.crossTenantKeyVaultResourceId">CrossTenantKeyVaultResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.federatedClientId">FederatedClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountId">NetappAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalId">SystemAssignedIdentityPrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeouts"></a>

```go
func Timeouts() NetappAccountEncryptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference">NetappAccountEncryptionTimeoutsOutputReference</a>

---

##### `CrossTenantKeyVaultResourceIdInput`<sup>Optional</sup> <a name="CrossTenantKeyVaultResourceIdInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.crossTenantKeyVaultResourceIdInput"></a>

```go
func CrossTenantKeyVaultResourceIdInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() *string
```

- *Type:* *string

---

##### `FederatedClientIdInput`<sup>Optional</sup> <a name="FederatedClientIdInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.federatedClientIdInput"></a>

```go
func FederatedClientIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetappAccountIdInput`<sup>Optional</sup> <a name="NetappAccountIdInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountIdInput"></a>

```go
func NetappAccountIdInput() *string
```

- *Type:* *string

---

##### `SystemAssignedIdentityPrincipalIdInput`<sup>Optional</sup> <a name="SystemAssignedIdentityPrincipalIdInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalIdInput"></a>

```go
func SystemAssignedIdentityPrincipalIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityIdInput"></a>

```go
func UserAssignedIdentityIdInput() *string
```

- *Type:* *string

---

##### `CrossTenantKeyVaultResourceId`<sup>Required</sup> <a name="CrossTenantKeyVaultResourceId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.crossTenantKeyVaultResourceId"></a>

```go
func CrossTenantKeyVaultResourceId() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.encryptionKey"></a>

```go
func EncryptionKey() *string
```

- *Type:* *string

---

##### `FederatedClientId`<sup>Required</sup> <a name="FederatedClientId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.federatedClientId"></a>

```go
func FederatedClientId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetappAccountId`<sup>Required</sup> <a name="NetappAccountId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.netappAccountId"></a>

```go
func NetappAccountId() *string
```

- *Type:* *string

---

##### `SystemAssignedIdentityPrincipalId`<sup>Required</sup> <a name="SystemAssignedIdentityPrincipalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.systemAssignedIdentityPrincipalId"></a>

```go
func SystemAssignedIdentityPrincipalId() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.userAssignedIdentityId"></a>

```go
func UserAssignedIdentityId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryption.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappAccountEncryptionConfig <a name="NetappAccountEncryptionConfig" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappaccountencryption"

&netappaccountencryption.NetappAccountEncryptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EncryptionKey: *string,
	NetappAccountId: *string,
	CrossTenantKeyVaultResourceId: *string,
	FederatedClientId: *string,
	Id: *string,
	SystemAssignedIdentityPrincipalId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.netappAccountEncryption.NetappAccountEncryptionTimeouts,
	UserAssignedIdentityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | The versionless encryption key url. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.netappAccountId">NetappAccountId</a></code> | <code>*string</code> | The ID of the NetApp Account where encryption will be set. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.crossTenantKeyVaultResourceId">CrossTenantKeyVaultResourceId</a></code> | <code>*string</code> | The full resource ID of the cross-tenant key vault. Required when using federated_client_id for cross-tenant scenarios. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.federatedClientId">FederatedClientId</a></code> | <code>*string</code> | The Client ID of the multi-tenant Entra ID application used to access cross-tenant key vaults. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#id NetappAccountEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.systemAssignedIdentityPrincipalId">SystemAssignedIdentityPrincipalId</a></code> | <code>*string</code> | The Principal ID of the System Assigned Identity to use for encryption. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | The resource ID of the User Assigned Identity to use for encryption. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.encryptionKey"></a>

```go
EncryptionKey *string
```

- *Type:* *string

The versionless encryption key url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#encryption_key NetappAccountEncryption#encryption_key}

---

##### `NetappAccountId`<sup>Required</sup> <a name="NetappAccountId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.netappAccountId"></a>

```go
NetappAccountId *string
```

- *Type:* *string

The ID of the NetApp Account where encryption will be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#netapp_account_id NetappAccountEncryption#netapp_account_id}

---

##### `CrossTenantKeyVaultResourceId`<sup>Optional</sup> <a name="CrossTenantKeyVaultResourceId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.crossTenantKeyVaultResourceId"></a>

```go
CrossTenantKeyVaultResourceId *string
```

- *Type:* *string

The full resource ID of the cross-tenant key vault. Required when using federated_client_id for cross-tenant scenarios.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#cross_tenant_key_vault_resource_id NetappAccountEncryption#cross_tenant_key_vault_resource_id}

---

##### `FederatedClientId`<sup>Optional</sup> <a name="FederatedClientId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.federatedClientId"></a>

```go
FederatedClientId *string
```

- *Type:* *string

The Client ID of the multi-tenant Entra ID application used to access cross-tenant key vaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#federated_client_id NetappAccountEncryption#federated_client_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#id NetappAccountEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SystemAssignedIdentityPrincipalId`<sup>Optional</sup> <a name="SystemAssignedIdentityPrincipalId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.systemAssignedIdentityPrincipalId"></a>

```go
SystemAssignedIdentityPrincipalId *string
```

- *Type:* *string

The Principal ID of the System Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#system_assigned_identity_principal_id NetappAccountEncryption#system_assigned_identity_principal_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.timeouts"></a>

```go
Timeouts NetappAccountEncryptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts">NetappAccountEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#timeouts NetappAccountEncryption#timeouts}

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionConfig.property.userAssignedIdentityId"></a>

```go
UserAssignedIdentityId *string
```

- *Type:* *string

The resource ID of the User Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#user_assigned_identity_id NetappAccountEncryption#user_assigned_identity_id}

---

### NetappAccountEncryptionTimeouts <a name="NetappAccountEncryptionTimeouts" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappaccountencryption"

&netappaccountencryption.NetappAccountEncryptionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#create NetappAccountEncryption#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#delete NetappAccountEncryption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#read NetappAccountEncryption#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#update NetappAccountEncryption#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#create NetappAccountEncryption#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#delete NetappAccountEncryption#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#read NetappAccountEncryption#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_account_encryption#update NetappAccountEncryption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappAccountEncryptionTimeoutsOutputReference <a name="NetappAccountEncryptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappaccountencryption"

netappaccountencryption.NewNetappAccountEncryptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappAccountEncryptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappAccountEncryption.NetappAccountEncryptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



