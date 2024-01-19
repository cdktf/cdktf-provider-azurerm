# `keyVaultCertificate` Submodule <a name="`keyVaultCertificate` Submodule" id="@cdktf/provider-azurerm.keyVaultCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultCertificate <a name="KeyVaultCertificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate azurerm_key_vault_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificate(scope Construct, id *string, config KeyVaultCertificateConfig) KeyVaultCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig">KeyVaultCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig">KeyVaultCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy">PutCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificatePolicy">ResetCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificate"></a>

```go
func PutCertificate(value KeyVaultCertificateCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

---

##### `PutCertificatePolicy` <a name="PutCertificatePolicy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy"></a>

```go
func PutCertificatePolicy(value KeyVaultCertificateCertificatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putCertificatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts"></a>

```go
func PutTimeouts(value KeyVaultCertificateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a>

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCertificatePolicy` <a name="ResetCertificatePolicy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetCertificatePolicy"></a>

```go
func ResetCertificatePolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.KeyVaultCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.KeyVaultCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.KeyVaultCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.KeyVaultCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KeyVaultCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KeyVaultCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KeyVaultCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference">KeyVaultCertificateCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateAttribute">CertificateAttribute</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList">KeyVaultCertificateCertificateAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateData">CertificateData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateDataBase64">CertificateDataBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicy">CertificatePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference">KeyVaultCertificateCertificatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerId">ResourceManagerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerVersionlessId">ResourceManagerVersionlessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference">KeyVaultCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessId">VersionlessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessSecretId">VersionlessSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateInput">CertificateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicyInput">CertificatePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificate"></a>

```go
func Certificate() KeyVaultCertificateCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference">KeyVaultCertificateCertificateOutputReference</a>

---

##### `CertificateAttribute`<sup>Required</sup> <a name="CertificateAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateAttribute"></a>

```go
func CertificateAttribute() KeyVaultCertificateCertificateAttributeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList">KeyVaultCertificateCertificateAttributeList</a>

---

##### `CertificateData`<sup>Required</sup> <a name="CertificateData" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateData"></a>

```go
func CertificateData() *string
```

- *Type:* *string

---

##### `CertificateDataBase64`<sup>Required</sup> <a name="CertificateDataBase64" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateDataBase64"></a>

```go
func CertificateDataBase64() *string
```

- *Type:* *string

---

##### `CertificatePolicy`<sup>Required</sup> <a name="CertificatePolicy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicy"></a>

```go
func CertificatePolicy() KeyVaultCertificateCertificatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference">KeyVaultCertificateCertificatePolicyOutputReference</a>

---

##### `ResourceManagerId`<sup>Required</sup> <a name="ResourceManagerId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerId"></a>

```go
func ResourceManagerId() *string
```

- *Type:* *string

---

##### `ResourceManagerVersionlessId`<sup>Required</sup> <a name="ResourceManagerVersionlessId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.resourceManagerVersionlessId"></a>

```go
func ResourceManagerVersionlessId() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeouts"></a>

```go
func Timeouts() KeyVaultCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference">KeyVaultCertificateTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VersionlessId`<sup>Required</sup> <a name="VersionlessId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessId"></a>

```go
func VersionlessId() *string
```

- *Type:* *string

---

##### `VersionlessSecretId`<sup>Required</sup> <a name="VersionlessSecretId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.versionlessSecretId"></a>

```go
func VersionlessSecretId() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificateInput"></a>

```go
func CertificateInput() KeyVaultCertificateCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

---

##### `CertificatePolicyInput`<sup>Optional</sup> <a name="CertificatePolicyInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.certificatePolicyInput"></a>

```go
func CertificatePolicyInput() KeyVaultCertificateCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultCertificateCertificate <a name="KeyVaultCertificateCertificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateCertificate {
	Contents: *string,
	Password: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.contents">Contents</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#contents KeyVaultCertificate#contents}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#password KeyVaultCertificate#password}. |

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.contents"></a>

```go
Contents *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#contents KeyVaultCertificate#contents}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#password KeyVaultCertificate#password}.

---

### KeyVaultCertificateCertificateAttribute <a name="KeyVaultCertificateCertificateAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateCertificateAttribute {

}
```


### KeyVaultCertificateCertificatePolicy <a name="KeyVaultCertificateCertificatePolicy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateCertificatePolicy {
	IssuerParameters: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters,
	KeyProperties: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties,
	SecretProperties: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties,
	LifetimeAction: interface{},
	X509CertificateProperties: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.issuerParameters">IssuerParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | issuer_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.keyProperties">KeyProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a></code> | key_properties block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.secretProperties">SecretProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a></code> | secret_properties block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.lifetimeAction">LifetimeAction</a></code> | <code>interface{}</code> | lifetime_action block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.x509CertificateProperties">X509CertificateProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | x509_certificate_properties block. |

---

##### `IssuerParameters`<sup>Required</sup> <a name="IssuerParameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.issuerParameters"></a>

```go
IssuerParameters KeyVaultCertificateCertificatePolicyIssuerParameters
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

issuer_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#issuer_parameters KeyVaultCertificate#issuer_parameters}

---

##### `KeyProperties`<sup>Required</sup> <a name="KeyProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.keyProperties"></a>

```go
KeyProperties KeyVaultCertificateCertificatePolicyKeyProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

key_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#key_properties KeyVaultCertificate#key_properties}

---

##### `SecretProperties`<sup>Required</sup> <a name="SecretProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.secretProperties"></a>

```go
SecretProperties KeyVaultCertificateCertificatePolicySecretProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

secret_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#secret_properties KeyVaultCertificate#secret_properties}

---

##### `LifetimeAction`<sup>Optional</sup> <a name="LifetimeAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.lifetimeAction"></a>

```go
LifetimeAction interface{}
```

- *Type:* interface{}

lifetime_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#lifetime_action KeyVaultCertificate#lifetime_action}

---

##### `X509CertificateProperties`<sup>Optional</sup> <a name="X509CertificateProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy.property.x509CertificateProperties"></a>

```go
X509CertificateProperties KeyVaultCertificateCertificatePolicyX509CertificateProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

x509_certificate_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#x509_certificate_properties KeyVaultCertificate#x509_certificate_properties}

---

### KeyVaultCertificateCertificatePolicyIssuerParameters <a name="KeyVaultCertificateCertificatePolicyIssuerParameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateCertificatePolicyIssuerParameters {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}.

---

### KeyVaultCertificateCertificatePolicyKeyProperties <a name="KeyVaultCertificateCertificatePolicyKeyProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateCertificatePolicyKeyProperties {
	Exportable: interface{},
	KeyType: *string,
	ReuseKey: interface{},
	Curve: *string,
	KeySize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.exportable">Exportable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#exportable KeyVaultCertificate#exportable}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keyType">KeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#key_type KeyVaultCertificate#key_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.reuseKey">ReuseKey</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#reuse_key KeyVaultCertificate#reuse_key}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.curve">Curve</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#curve KeyVaultCertificate#curve}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keySize">KeySize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#key_size KeyVaultCertificate#key_size}. |

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.exportable"></a>

```go
Exportable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#exportable KeyVaultCertificate#exportable}.

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#key_type KeyVaultCertificate#key_type}.

---

##### `ReuseKey`<sup>Required</sup> <a name="ReuseKey" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.reuseKey"></a>

```go
ReuseKey interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#reuse_key KeyVaultCertificate#reuse_key}.

---

##### `Curve`<sup>Optional</sup> <a name="Curve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.curve"></a>

```go
Curve *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#curve KeyVaultCertificate#curve}.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties.property.keySize"></a>

```go
KeySize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#key_size KeyVaultCertificate#key_size}.

---

### KeyVaultCertificateCertificatePolicyLifetimeAction <a name="KeyVaultCertificateCertificatePolicyLifetimeAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateCertificatePolicyLifetimeAction {
	Action: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction,
	Trigger: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | trigger block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.action"></a>

```go
Action KeyVaultCertificateCertificatePolicyLifetimeActionAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#action KeyVaultCertificate#action}

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeAction.property.trigger"></a>

```go
Trigger KeyVaultCertificateCertificatePolicyLifetimeActionTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#trigger KeyVaultCertificate#trigger}

---

### KeyVaultCertificateCertificatePolicyLifetimeActionAction <a name="KeyVaultCertificateCertificatePolicyLifetimeActionAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction {
	ActionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction.property.actionType">ActionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#action_type KeyVaultCertificate#action_type}. |

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction.property.actionType"></a>

```go
ActionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#action_type KeyVaultCertificate#action_type}.

---

### KeyVaultCertificateCertificatePolicyLifetimeActionTrigger <a name="KeyVaultCertificateCertificatePolicyLifetimeActionTrigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger {
	DaysBeforeExpiry: *f64,
	LifetimePercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.daysBeforeExpiry">DaysBeforeExpiry</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#days_before_expiry KeyVaultCertificate#days_before_expiry}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.lifetimePercentage">LifetimePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#lifetime_percentage KeyVaultCertificate#lifetime_percentage}. |

---

##### `DaysBeforeExpiry`<sup>Optional</sup> <a name="DaysBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.daysBeforeExpiry"></a>

```go
DaysBeforeExpiry *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#days_before_expiry KeyVaultCertificate#days_before_expiry}.

---

##### `LifetimePercentage`<sup>Optional</sup> <a name="LifetimePercentage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger.property.lifetimePercentage"></a>

```go
LifetimePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#lifetime_percentage KeyVaultCertificate#lifetime_percentage}.

---

### KeyVaultCertificateCertificatePolicySecretProperties <a name="KeyVaultCertificateCertificatePolicySecretProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateCertificatePolicySecretProperties {
	ContentType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#content_type KeyVaultCertificate#content_type}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#content_type KeyVaultCertificate#content_type}.

---

### KeyVaultCertificateCertificatePolicyX509CertificateProperties <a name="KeyVaultCertificateCertificatePolicyX509CertificateProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties {
	KeyUsage: *[]*string,
	Subject: *string,
	ValidityInMonths: *f64,
	ExtendedKeyUsage: *[]*string,
	SubjectAlternativeNames: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.keyUsage">KeyUsage</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#key_usage KeyVaultCertificate#key_usage}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subject">Subject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#subject KeyVaultCertificate#subject}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.validityInMonths">ValidityInMonths</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#validity_in_months KeyVaultCertificate#validity_in_months}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#extended_key_usage KeyVaultCertificate#extended_key_usage}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | subject_alternative_names block. |

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.keyUsage"></a>

```go
KeyUsage *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#key_usage KeyVaultCertificate#key_usage}.

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subject"></a>

```go
Subject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#subject KeyVaultCertificate#subject}.

---

##### `ValidityInMonths`<sup>Required</sup> <a name="ValidityInMonths" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.validityInMonths"></a>

```go
ValidityInMonths *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#validity_in_months KeyVaultCertificate#validity_in_months}.

---

##### `ExtendedKeyUsage`<sup>Optional</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.extendedKeyUsage"></a>

```go
ExtendedKeyUsage *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#extended_key_usage KeyVaultCertificate#extended_key_usage}.

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties.property.subjectAlternativeNames"></a>

```go
SubjectAlternativeNames KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#subject_alternative_names KeyVaultCertificate#subject_alternative_names}

---

### KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames <a name="KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames {
	DnsNames: *[]*string,
	Emails: *[]*string,
	Upns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.dnsNames">DnsNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#dns_names KeyVaultCertificate#dns_names}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.emails">Emails</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#emails KeyVaultCertificate#emails}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.upns">Upns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#upns KeyVaultCertificate#upns}. |

---

##### `DnsNames`<sup>Optional</sup> <a name="DnsNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.dnsNames"></a>

```go
DnsNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#dns_names KeyVaultCertificate#dns_names}.

---

##### `Emails`<sup>Optional</sup> <a name="Emails" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.emails"></a>

```go
Emails *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#emails KeyVaultCertificate#emails}.

---

##### `Upns`<sup>Optional</sup> <a name="Upns" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.property.upns"></a>

```go
Upns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#upns KeyVaultCertificate#upns}.

---

### KeyVaultCertificateConfig <a name="KeyVaultCertificateConfig" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyVaultId: *string,
	Name: *string,
	Certificate: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.keyVaultCertificate.KeyVaultCertificateCertificate,
	CertificatePolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.keyVaultCertificate.KeyVaultCertificateCertificatePolicy,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.keyVaultCertificate.KeyVaultCertificateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#key_vault_id KeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificatePolicy">CertificatePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a></code> | certificate_policy block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#id KeyVaultCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#tags KeyVaultCertificate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#key_vault_id KeyVaultCertificate#key_vault_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificate"></a>

```go
Certificate KeyVaultCertificateCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#certificate KeyVaultCertificate#certificate}

---

##### `CertificatePolicy`<sup>Optional</sup> <a name="CertificatePolicy" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.certificatePolicy"></a>

```go
CertificatePolicy KeyVaultCertificateCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

certificate_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#certificate_policy KeyVaultCertificate#certificate_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#id KeyVaultCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#tags KeyVaultCertificate#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateConfig.property.timeouts"></a>

```go
Timeouts KeyVaultCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts">KeyVaultCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#timeouts KeyVaultCertificate#timeouts}

---

### KeyVaultCertificateTimeouts <a name="KeyVaultCertificateTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

&keyvaultcertificate.KeyVaultCertificateTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#create KeyVaultCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#delete KeyVaultCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#read KeyVaultCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#update KeyVaultCertificate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#create KeyVaultCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#delete KeyVaultCertificate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#read KeyVaultCertificate#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/key_vault_certificate#update KeyVaultCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultCertificateCertificateAttributeList <a name="KeyVaultCertificateCertificateAttributeList" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificateAttributeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KeyVaultCertificateCertificateAttributeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.get"></a>

```go
func Get(index *f64) KeyVaultCertificateCertificateAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KeyVaultCertificateCertificateAttributeOutputReference <a name="KeyVaultCertificateCertificateAttributeOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificateAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KeyVaultCertificateCertificateAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.expires">Expires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.notBefore">NotBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.recoveryLevel">RecoveryLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.updated">Updated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute">KeyVaultCertificateCertificateAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.expires"></a>

```go
func Expires() *string
```

- *Type:* *string

---

##### `NotBefore`<sup>Required</sup> <a name="NotBefore" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.notBefore"></a>

```go
func NotBefore() *string
```

- *Type:* *string

---

##### `RecoveryLevel`<sup>Required</sup> <a name="RecoveryLevel" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.recoveryLevel"></a>

```go
func RecoveryLevel() *string
```

- *Type:* *string

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.updated"></a>

```go
func Updated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultCertificateCertificateAttribute
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateAttribute">KeyVaultCertificateCertificateAttribute</a>

---


### KeyVaultCertificateCertificateOutputReference <a name="KeyVaultCertificateCertificateOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultCertificateCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.resetPassword"></a>

```go
func ResetPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contentsInput">ContentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contents">Contents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contentsInput"></a>

```go
func ContentsInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.contents"></a>

```go
func Contents() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultCertificateCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificate">KeyVaultCertificateCertificate</a>

---


### KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference <a name="KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultCertificateCertificatePolicyIssuerParameters
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

---


### KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference <a name="KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetCurve">ResetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetKeySize">ResetKeySize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurve` <a name="ResetCurve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetCurve"></a>

```go
func ResetCurve()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resetKeySize"></a>

```go
func ResetKeySize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curveInput">CurveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportableInput">ExportableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySizeInput">KeySizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKeyInput">ReuseKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve">Curve</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable">Exportable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize">KeySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey">ReuseKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurveInput`<sup>Optional</sup> <a name="CurveInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curveInput"></a>

```go
func CurveInput() *string
```

- *Type:* *string

---

##### `ExportableInput`<sup>Optional</sup> <a name="ExportableInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportableInput"></a>

```go
func ExportableInput() interface{}
```

- *Type:* interface{}

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySizeInput"></a>

```go
func KeySizeInput() *f64
```

- *Type:* *f64

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `ReuseKeyInput`<sup>Optional</sup> <a name="ReuseKeyInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKeyInput"></a>

```go
func ReuseKeyInput() interface{}
```

- *Type:* interface{}

---

##### `Curve`<sup>Required</sup> <a name="Curve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve"></a>

```go
func Curve() *string
```

- *Type:* *string

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable"></a>

```go
func Exportable() interface{}
```

- *Type:* interface{}

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize"></a>

```go
func KeySize() *f64
```

- *Type:* *f64

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `ReuseKey`<sup>Required</sup> <a name="ReuseKey" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey"></a>

```go
func ReuseKey() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultCertificateCertificatePolicyKeyProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

---


### KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference <a name="KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionTypeInput"></a>

```go
func ActionTypeInput() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultCertificateCertificatePolicyLifetimeActionAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

---


### KeyVaultCertificateCertificatePolicyLifetimeActionList <a name="KeyVaultCertificateCertificatePolicyLifetimeActionList" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificatePolicyLifetimeActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KeyVaultCertificateCertificatePolicyLifetimeActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.get"></a>

```go
func Get(index *f64) KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference <a name="KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putAction"></a>

```go
func PutAction(value KeyVaultCertificateCertificatePolicyLifetimeActionAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putTrigger"></a>

```go
func PutTrigger(value KeyVaultCertificateCertificatePolicyLifetimeActionTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action"></a>

```go
func Action() KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger"></a>

```go
func Trigger() KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference">KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.actionInput"></a>

```go
func ActionInput() KeyVaultCertificateCertificatePolicyLifetimeActionAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionAction">KeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.triggerInput"></a>

```go
func TriggerInput() KeyVaultCertificateCertificatePolicyLifetimeActionTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference <a name="KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetDaysBeforeExpiry">ResetDaysBeforeExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetLifetimePercentage">ResetLifetimePercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysBeforeExpiry` <a name="ResetDaysBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetDaysBeforeExpiry"></a>

```go
func ResetDaysBeforeExpiry()
```

##### `ResetLifetimePercentage` <a name="ResetLifetimePercentage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resetLifetimePercentage"></a>

```go
func ResetLifetimePercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiryInput">DaysBeforeExpiryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentageInput">LifetimePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry">DaysBeforeExpiry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage">LifetimePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysBeforeExpiryInput`<sup>Optional</sup> <a name="DaysBeforeExpiryInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiryInput"></a>

```go
func DaysBeforeExpiryInput() *f64
```

- *Type:* *f64

---

##### `LifetimePercentageInput`<sup>Optional</sup> <a name="LifetimePercentageInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentageInput"></a>

```go
func LifetimePercentageInput() *f64
```

- *Type:* *f64

---

##### `DaysBeforeExpiry`<sup>Required</sup> <a name="DaysBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry"></a>

```go
func DaysBeforeExpiry() *f64
```

- *Type:* *f64

---

##### `LifetimePercentage`<sup>Required</sup> <a name="LifetimePercentage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage"></a>

```go
func LifetimePercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultCertificateCertificatePolicyLifetimeActionTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionTrigger">KeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

---


### KeyVaultCertificateCertificatePolicyOutputReference <a name="KeyVaultCertificateCertificatePolicyOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultCertificateCertificatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putIssuerParameters">PutIssuerParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties">PutKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putLifetimeAction">PutLifetimeAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putSecretProperties">PutSecretProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties">PutX509CertificateProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetLifetimeAction">ResetLifetimeAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetX509CertificateProperties">ResetX509CertificateProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIssuerParameters` <a name="PutIssuerParameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putIssuerParameters"></a>

```go
func PutIssuerParameters(value KeyVaultCertificateCertificatePolicyIssuerParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putIssuerParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

---

##### `PutKeyProperties` <a name="PutKeyProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties"></a>

```go
func PutKeyProperties(value KeyVaultCertificateCertificatePolicyKeyProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

---

##### `PutLifetimeAction` <a name="PutLifetimeAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putLifetimeAction"></a>

```go
func PutLifetimeAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putLifetimeAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecretProperties` <a name="PutSecretProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putSecretProperties"></a>

```go
func PutSecretProperties(value KeyVaultCertificateCertificatePolicySecretProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putSecretProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

---

##### `PutX509CertificateProperties` <a name="PutX509CertificateProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties"></a>

```go
func PutX509CertificateProperties(value KeyVaultCertificateCertificatePolicyX509CertificateProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.putX509CertificateProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

---

##### `ResetLifetimeAction` <a name="ResetLifetimeAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetLifetimeAction"></a>

```go
func ResetLifetimeAction()
```

##### `ResetX509CertificateProperties` <a name="ResetX509CertificateProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.resetX509CertificateProperties"></a>

```go
func ResetX509CertificateProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters">IssuerParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference">KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties">KeyProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference">KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction">LifetimeAction</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList">KeyVaultCertificateCertificatePolicyLifetimeActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties">SecretProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference">KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties">X509CertificateProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParametersInput">IssuerParametersInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyPropertiesInput">KeyPropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeActionInput">LifetimeActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretPropertiesInput">SecretPropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificatePropertiesInput">X509CertificatePropertiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IssuerParameters`<sup>Required</sup> <a name="IssuerParameters" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters"></a>

```go
func IssuerParameters() KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference">KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference</a>

---

##### `KeyProperties`<sup>Required</sup> <a name="KeyProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties"></a>

```go
func KeyProperties() KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference">KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference</a>

---

##### `LifetimeAction`<sup>Required</sup> <a name="LifetimeAction" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction"></a>

```go
func LifetimeAction() KeyVaultCertificateCertificatePolicyLifetimeActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyLifetimeActionList">KeyVaultCertificateCertificatePolicyLifetimeActionList</a>

---

##### `SecretProperties`<sup>Required</sup> <a name="SecretProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties"></a>

```go
func SecretProperties() KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference">KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference</a>

---

##### `X509CertificateProperties`<sup>Required</sup> <a name="X509CertificateProperties" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties"></a>

```go
func X509CertificateProperties() KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference</a>

---

##### `IssuerParametersInput`<sup>Optional</sup> <a name="IssuerParametersInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.issuerParametersInput"></a>

```go
func IssuerParametersInput() KeyVaultCertificateCertificatePolicyIssuerParameters
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyIssuerParameters">KeyVaultCertificateCertificatePolicyIssuerParameters</a>

---

##### `KeyPropertiesInput`<sup>Optional</sup> <a name="KeyPropertiesInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.keyPropertiesInput"></a>

```go
func KeyPropertiesInput() KeyVaultCertificateCertificatePolicyKeyProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyKeyProperties">KeyVaultCertificateCertificatePolicyKeyProperties</a>

---

##### `LifetimeActionInput`<sup>Optional</sup> <a name="LifetimeActionInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeActionInput"></a>

```go
func LifetimeActionInput() interface{}
```

- *Type:* interface{}

---

##### `SecretPropertiesInput`<sup>Optional</sup> <a name="SecretPropertiesInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.secretPropertiesInput"></a>

```go
func SecretPropertiesInput() KeyVaultCertificateCertificatePolicySecretProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

---

##### `X509CertificatePropertiesInput`<sup>Optional</sup> <a name="X509CertificatePropertiesInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificatePropertiesInput"></a>

```go
func X509CertificatePropertiesInput() KeyVaultCertificateCertificatePolicyX509CertificateProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultCertificateCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicy">KeyVaultCertificateCertificatePolicy</a>

---


### KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference <a name="KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultCertificateCertificatePolicySecretProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicySecretProperties">KeyVaultCertificateCertificatePolicySecretProperties</a>

---


### KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference <a name="KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.putSubjectAlternativeNames">PutSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetExtendedKeyUsage">ResetExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubjectAlternativeNames` <a name="PutSubjectAlternativeNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.putSubjectAlternativeNames"></a>

```go
func PutSubjectAlternativeNames(value KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

---

##### `ResetExtendedKeyUsage` <a name="ResetExtendedKeyUsage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetExtendedKeyUsage"></a>

```go
func ResetExtendedKeyUsage()
```

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resetSubjectAlternativeNames"></a>

```go
func ResetSubjectAlternativeNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsageInput">ExtendedKeyUsageInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsageInput">KeyUsageInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectInput">SubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonthsInput">ValidityInMonthsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage">KeyUsage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths">ValidityInMonths</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference</a>

---

##### `ExtendedKeyUsageInput`<sup>Optional</sup> <a name="ExtendedKeyUsageInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsageInput"></a>

```go
func ExtendedKeyUsageInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsageInput"></a>

```go
func KeyUsageInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNamesInput"></a>

```go
func SubjectAlternativeNamesInput() KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectInput"></a>

```go
func SubjectInput() *string
```

- *Type:* *string

---

##### `ValidityInMonthsInput`<sup>Optional</sup> <a name="ValidityInMonthsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonthsInput"></a>

```go
func ValidityInMonthsInput() *f64
```

- *Type:* *f64

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage"></a>

```go
func ExtendedKeyUsage() *[]*string
```

- *Type:* *[]*string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage"></a>

```go
func KeyUsage() *[]*string
```

- *Type:* *[]*string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `ValidityInMonths`<sup>Required</sup> <a name="ValidityInMonths" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths"></a>

```go
func ValidityInMonths() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultCertificateCertificatePolicyX509CertificateProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificateProperties">KeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

---


### KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference <a name="KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetDnsNames">ResetDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetEmails">ResetEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetUpns">ResetUpns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsNames` <a name="ResetDnsNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetDnsNames"></a>

```go
func ResetDnsNames()
```

##### `ResetEmails` <a name="ResetEmails" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetEmails"></a>

```go
func ResetEmails()
```

##### `ResetUpns` <a name="ResetUpns" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resetUpns"></a>

```go
func ResetUpns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNamesInput">DnsNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emailsInput">EmailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upnsInput">UpnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames">DnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails">Emails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns">Upns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsNamesInput`<sup>Optional</sup> <a name="DnsNamesInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNamesInput"></a>

```go
func DnsNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailsInput`<sup>Optional</sup> <a name="EmailsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emailsInput"></a>

```go
func EmailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UpnsInput`<sup>Optional</sup> <a name="UpnsInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upnsInput"></a>

```go
func UpnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsNames`<sup>Required</sup> <a name="DnsNames" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames"></a>

```go
func DnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails"></a>

```go
func Emails() *[]*string
```

- *Type:* *[]*string

---

##### `Upns`<sup>Required</sup> <a name="Upns" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns"></a>

```go
func Upns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

---


### KeyVaultCertificateTimeoutsOutputReference <a name="KeyVaultCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/keyvaultcertificate"

keyvaultcertificate.NewKeyVaultCertificateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultCertificateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultCertificate.KeyVaultCertificateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



