# `apiManagementGatewayCertificateAuthority` Submodule <a name="`apiManagementGatewayCertificateAuthority` Submodule" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementGatewayCertificateAuthority <a name="ApiManagementGatewayCertificateAuthority" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority azurerm_api_management_gateway_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementgatewaycertificateauthority"

apimanagementgatewaycertificateauthority.NewApiManagementGatewayCertificateAuthority(scope Construct, id *string, config ApiManagementGatewayCertificateAuthorityConfig) ApiManagementGatewayCertificateAuthority
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig">ApiManagementGatewayCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig">ApiManagementGatewayCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetIsTrusted">ResetIsTrusted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementGatewayCertificateAuthorityTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetId"></a>

```go
func ResetId()
```

##### `ResetIsTrusted` <a name="ResetIsTrusted" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetIsTrusted"></a>

```go
func ResetIsTrusted()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementGatewayCertificateAuthority resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementgatewaycertificateauthority"

apimanagementgatewaycertificateauthority.ApiManagementGatewayCertificateAuthority_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementgatewaycertificateauthority"

apimanagementgatewaycertificateauthority.ApiManagementGatewayCertificateAuthority_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementgatewaycertificateauthority"

apimanagementgatewaycertificateauthority.ApiManagementGatewayCertificateAuthority_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementgatewaycertificateauthority"

apimanagementgatewaycertificateauthority.ApiManagementGatewayCertificateAuthority_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiManagementGatewayCertificateAuthority resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiManagementGatewayCertificateAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiManagementGatewayCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementGatewayCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference">ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementIdInput">ApiManagementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayNameInput">GatewayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrustedInput">IsTrustedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementId">ApiManagementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayName">GatewayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrusted">IsTrusted</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeouts"></a>

```go
func Timeouts() ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference">ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference</a>

---

##### `ApiManagementIdInput`<sup>Optional</sup> <a name="ApiManagementIdInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementIdInput"></a>

```go
func ApiManagementIdInput() *string
```

- *Type:* *string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `GatewayNameInput`<sup>Optional</sup> <a name="GatewayNameInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayNameInput"></a>

```go
func GatewayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsTrustedInput`<sup>Optional</sup> <a name="IsTrustedInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrustedInput"></a>

```go
func IsTrustedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementId"></a>

```go
func ApiManagementId() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayName"></a>

```go
func GatewayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsTrusted`<sup>Required</sup> <a name="IsTrusted" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrusted"></a>

```go
func IsTrusted() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementGatewayCertificateAuthorityConfig <a name="ApiManagementGatewayCertificateAuthorityConfig" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementgatewaycertificateauthority"

&apimanagementgatewaycertificateauthority.ApiManagementGatewayCertificateAuthorityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementId: *string,
	CertificateName: *string,
	GatewayName: *string,
	Id: *string,
	IsTrusted: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.apiManagementId">ApiManagementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#api_management_id ApiManagementGatewayCertificateAuthority#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.certificateName">CertificateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#certificate_name ApiManagementGatewayCertificateAuthority#certificate_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.gatewayName">GatewayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#gateway_name ApiManagementGatewayCertificateAuthority#gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#id ApiManagementGatewayCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.isTrusted">IsTrusted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#is_trusted ApiManagementGatewayCertificateAuthority#is_trusted}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.apiManagementId"></a>

```go
ApiManagementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#api_management_id ApiManagementGatewayCertificateAuthority#api_management_id}.

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#certificate_name ApiManagementGatewayCertificateAuthority#certificate_name}.

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.gatewayName"></a>

```go
GatewayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#gateway_name ApiManagementGatewayCertificateAuthority#gateway_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#id ApiManagementGatewayCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsTrusted`<sup>Optional</sup> <a name="IsTrusted" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.isTrusted"></a>

```go
IsTrusted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#is_trusted ApiManagementGatewayCertificateAuthority#is_trusted}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.timeouts"></a>

```go
Timeouts ApiManagementGatewayCertificateAuthorityTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#timeouts ApiManagementGatewayCertificateAuthority#timeouts}

---

### ApiManagementGatewayCertificateAuthorityTimeouts <a name="ApiManagementGatewayCertificateAuthorityTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementgatewaycertificateauthority"

&apimanagementgatewaycertificateauthority.ApiManagementGatewayCertificateAuthorityTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#create ApiManagementGatewayCertificateAuthority#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#delete ApiManagementGatewayCertificateAuthority#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#read ApiManagementGatewayCertificateAuthority#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#update ApiManagementGatewayCertificateAuthority#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#create ApiManagementGatewayCertificateAuthority#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#delete ApiManagementGatewayCertificateAuthority#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#read ApiManagementGatewayCertificateAuthority#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/api_management_gateway_certificate_authority#update ApiManagementGatewayCertificateAuthority#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference <a name="ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementgatewaycertificateauthority"

apimanagementgatewaycertificateauthority.NewApiManagementGatewayCertificateAuthorityTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



