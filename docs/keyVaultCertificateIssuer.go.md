# `keyVaultCertificateIssuer` Submodule <a name="`keyVaultCertificateIssuer` Submodule" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultCertificateIssuer <a name="KeyVaultCertificateIssuer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer azurerm_key_vault_certificate_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/keyvaultcertificateissuer"

keyvaultcertificateissuer.NewKeyVaultCertificateIssuer(scope Construct, id *string, config KeyVaultCertificateIssuerConfig) KeyVaultCertificateIssuer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig">KeyVaultCertificateIssuerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig">KeyVaultCertificateIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putAdmin">PutAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAdmin">ResetAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOrgId">ResetOrgId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdmin` <a name="PutAdmin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putAdmin"></a>

```go
func PutAdmin(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putAdmin.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putTimeouts"></a>

```go
func PutTimeouts(value KeyVaultCertificateIssuerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAdmin` <a name="ResetAdmin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAdmin"></a>

```go
func ResetAdmin()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetId"></a>

```go
func ResetId()
```

##### `ResetOrgId` <a name="ResetOrgId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOrgId"></a>

```go
func ResetOrgId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultCertificateIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/keyvaultcertificateissuer"

keyvaultcertificateissuer.KeyVaultCertificateIssuer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/keyvaultcertificateissuer"

keyvaultcertificateissuer.KeyVaultCertificateIssuer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/keyvaultcertificateissuer"

keyvaultcertificateissuer.KeyVaultCertificateIssuer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/keyvaultcertificateissuer"

keyvaultcertificateissuer.KeyVaultCertificateIssuer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KeyVaultCertificateIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KeyVaultCertificateIssuer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KeyVaultCertificateIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultCertificateIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.admin">Admin</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList">KeyVaultCertificateIssuerAdminList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference">KeyVaultCertificateIssuerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.adminInput">AdminInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.admin"></a>

```go
func Admin() KeyVaultCertificateIssuerAdminList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList">KeyVaultCertificateIssuerAdminList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeouts"></a>

```go
func Timeouts() KeyVaultCertificateIssuerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference">KeyVaultCertificateIssuerTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AdminInput`<sup>Optional</sup> <a name="AdminInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.adminInput"></a>

```go
func AdminInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultCertificateIssuerAdmin <a name="KeyVaultCertificateIssuerAdmin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/keyvaultcertificateissuer"

&keyvaultcertificateissuer.KeyVaultCertificateIssuerAdmin {
	EmailAddress: *string,
	FirstName: *string,
	LastName: *string,
	Phone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#email_address KeyVaultCertificateIssuer#email_address}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#first_name KeyVaultCertificateIssuer#first_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#last_name KeyVaultCertificateIssuer#last_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.phone">Phone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#phone KeyVaultCertificateIssuer#phone}. |

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#email_address KeyVaultCertificateIssuer#email_address}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#first_name KeyVaultCertificateIssuer#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#last_name KeyVaultCertificateIssuer#last_name}.

---

##### `Phone`<sup>Optional</sup> <a name="Phone" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.phone"></a>

```go
Phone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#phone KeyVaultCertificateIssuer#phone}.

---

### KeyVaultCertificateIssuerConfig <a name="KeyVaultCertificateIssuerConfig" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/keyvaultcertificateissuer"

&keyvaultcertificateissuer.KeyVaultCertificateIssuerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyVaultId: *string,
	Name: *string,
	ProviderName: *string,
	AccountId: *string,
	Admin: interface{},
	Id: *string,
	OrgId: *string,
	Password: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#key_vault_id KeyVaultCertificateIssuer#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#name KeyVaultCertificateIssuer#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#provider_name KeyVaultCertificateIssuer#provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#account_id KeyVaultCertificateIssuer#account_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.admin">Admin</a></code> | <code>interface{}</code> | admin block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#id KeyVaultCertificateIssuer#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.orgId">OrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#org_id KeyVaultCertificateIssuer#org_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#password KeyVaultCertificateIssuer#password}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#key_vault_id KeyVaultCertificateIssuer#key_vault_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#name KeyVaultCertificateIssuer#name}.

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#provider_name KeyVaultCertificateIssuer#provider_name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#account_id KeyVaultCertificateIssuer#account_id}.

---

##### `Admin`<sup>Optional</sup> <a name="Admin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.admin"></a>

```go
Admin interface{}
```

- *Type:* interface{}

admin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#admin KeyVaultCertificateIssuer#admin}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#id KeyVaultCertificateIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrgId`<sup>Optional</sup> <a name="OrgId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#org_id KeyVaultCertificateIssuer#org_id}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#password KeyVaultCertificateIssuer#password}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.timeouts"></a>

```go
Timeouts KeyVaultCertificateIssuerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#timeouts KeyVaultCertificateIssuer#timeouts}

---

### KeyVaultCertificateIssuerTimeouts <a name="KeyVaultCertificateIssuerTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/keyvaultcertificateissuer"

&keyvaultcertificateissuer.KeyVaultCertificateIssuerTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#create KeyVaultCertificateIssuer#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#delete KeyVaultCertificateIssuer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#read KeyVaultCertificateIssuer#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#update KeyVaultCertificateIssuer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#create KeyVaultCertificateIssuer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#delete KeyVaultCertificateIssuer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#read KeyVaultCertificateIssuer#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/key_vault_certificate_issuer#update KeyVaultCertificateIssuer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultCertificateIssuerAdminList <a name="KeyVaultCertificateIssuerAdminList" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/keyvaultcertificateissuer"

keyvaultcertificateissuer.NewKeyVaultCertificateIssuerAdminList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KeyVaultCertificateIssuerAdminList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.get"></a>

```go
func Get(index *f64) KeyVaultCertificateIssuerAdminOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyVaultCertificateIssuerAdminOutputReference <a name="KeyVaultCertificateIssuerAdminOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/keyvaultcertificateissuer"

keyvaultcertificateissuer.NewKeyVaultCertificateIssuerAdminOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KeyVaultCertificateIssuerAdminOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetPhone">ResetPhone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetPhone` <a name="ResetPhone" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetPhone"></a>

```go
func ResetPhone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phoneInput">PhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `PhoneInput`<sup>Optional</sup> <a name="PhoneInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phoneInput"></a>

```go
func PhoneInput() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyVaultCertificateIssuerTimeoutsOutputReference <a name="KeyVaultCertificateIssuerTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/keyvaultcertificateissuer"

keyvaultcertificateissuer.NewKeyVaultCertificateIssuerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultCertificateIssuerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



