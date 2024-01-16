# `cdnEndpointCustomDomain` Submodule <a name="`cdnEndpointCustomDomain` Submodule" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnEndpointCustomDomain <a name="CdnEndpointCustomDomain" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain azurerm_cdn_endpoint_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

cdnendpointcustomdomain.NewCdnEndpointCustomDomain(scope Construct, id *string, config CdnEndpointCustomDomainConfig) CdnEndpointCustomDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig">CdnEndpointCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig">CdnEndpointCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putCdnManagedHttps">PutCdnManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putUserManagedHttps">PutUserManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetCdnManagedHttps">ResetCdnManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetUserManagedHttps">ResetUserManagedHttps</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCdnManagedHttps` <a name="PutCdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putCdnManagedHttps"></a>

```go
func PutCdnManagedHttps(value CdnEndpointCustomDomainCdnManagedHttps)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putCdnManagedHttps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putTimeouts"></a>

```go
func PutTimeouts(value CdnEndpointCustomDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a>

---

##### `PutUserManagedHttps` <a name="PutUserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putUserManagedHttps"></a>

```go
func PutUserManagedHttps(value CdnEndpointCustomDomainUserManagedHttps)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putUserManagedHttps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

---

##### `ResetCdnManagedHttps` <a name="ResetCdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetCdnManagedHttps"></a>

```go
func ResetCdnManagedHttps()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserManagedHttps` <a name="ResetUserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetUserManagedHttps"></a>

```go
func ResetUserManagedHttps()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CdnEndpointCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

cdnendpointcustomdomain.CdnEndpointCustomDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

cdnendpointcustomdomain.CdnEndpointCustomDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

cdnendpointcustomdomain.CdnEndpointCustomDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

cdnendpointcustomdomain.CdnEndpointCustomDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CdnEndpointCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CdnEndpointCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CdnEndpointCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CdnEndpointCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttps">CdnManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference">CdnEndpointCustomDomainCdnManagedHttpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference">CdnEndpointCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttps">UserManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference">CdnEndpointCustomDomainUserManagedHttpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointIdInput">CdnEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttpsInput">CdnManagedHttpsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttpsInput">UserManagedHttpsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointId">CdnEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CdnManagedHttps`<sup>Required</sup> <a name="CdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttps"></a>

```go
func CdnManagedHttps() CdnEndpointCustomDomainCdnManagedHttpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference">CdnEndpointCustomDomainCdnManagedHttpsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeouts"></a>

```go
func Timeouts() CdnEndpointCustomDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference">CdnEndpointCustomDomainTimeoutsOutputReference</a>

---

##### `UserManagedHttps`<sup>Required</sup> <a name="UserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttps"></a>

```go
func UserManagedHttps() CdnEndpointCustomDomainUserManagedHttpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference">CdnEndpointCustomDomainUserManagedHttpsOutputReference</a>

---

##### `CdnEndpointIdInput`<sup>Optional</sup> <a name="CdnEndpointIdInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointIdInput"></a>

```go
func CdnEndpointIdInput() *string
```

- *Type:* *string

---

##### `CdnManagedHttpsInput`<sup>Optional</sup> <a name="CdnManagedHttpsInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttpsInput"></a>

```go
func CdnManagedHttpsInput() CdnEndpointCustomDomainCdnManagedHttps
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserManagedHttpsInput`<sup>Optional</sup> <a name="UserManagedHttpsInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttpsInput"></a>

```go
func UserManagedHttpsInput() CdnEndpointCustomDomainUserManagedHttps
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

---

##### `CdnEndpointId`<sup>Required</sup> <a name="CdnEndpointId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointId"></a>

```go
func CdnEndpointId() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnEndpointCustomDomainCdnManagedHttps <a name="CdnEndpointCustomDomainCdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

&cdnendpointcustomdomain.CdnEndpointCustomDomainCdnManagedHttps {
	CertificateType: *string,
	ProtocolType: *string,
	TlsVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.certificateType">CertificateType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#certificate_type CdnEndpointCustomDomain#certificate_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.protocolType">ProtocolType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#protocol_type CdnEndpointCustomDomain#protocol_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.tlsVersion">TlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}. |

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.certificateType"></a>

```go
CertificateType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#certificate_type CdnEndpointCustomDomain#certificate_type}.

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.protocolType"></a>

```go
ProtocolType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#protocol_type CdnEndpointCustomDomain#protocol_type}.

---

##### `TlsVersion`<sup>Optional</sup> <a name="TlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.tlsVersion"></a>

```go
TlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}.

---

### CdnEndpointCustomDomainConfig <a name="CdnEndpointCustomDomainConfig" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

&cdnendpointcustomdomain.CdnEndpointCustomDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CdnEndpointId: *string,
	HostName: *string,
	Name: *string,
	CdnManagedHttps: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts,
	UserManagedHttps: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnEndpointId">CdnEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#cdn_endpoint_id CdnEndpointCustomDomain#cdn_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#host_name CdnEndpointCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#name CdnEndpointCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnManagedHttps">CdnManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a></code> | cdn_managed_https block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#id CdnEndpointCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.userManagedHttps">UserManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a></code> | user_managed_https block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CdnEndpointId`<sup>Required</sup> <a name="CdnEndpointId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnEndpointId"></a>

```go
CdnEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#cdn_endpoint_id CdnEndpointCustomDomain#cdn_endpoint_id}.

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#host_name CdnEndpointCustomDomain#host_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#name CdnEndpointCustomDomain#name}.

---

##### `CdnManagedHttps`<sup>Optional</sup> <a name="CdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnManagedHttps"></a>

```go
CdnManagedHttps CdnEndpointCustomDomainCdnManagedHttps
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

cdn_managed_https block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#cdn_managed_https CdnEndpointCustomDomain#cdn_managed_https}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#id CdnEndpointCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.timeouts"></a>

```go
Timeouts CdnEndpointCustomDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#timeouts CdnEndpointCustomDomain#timeouts}

---

##### `UserManagedHttps`<sup>Optional</sup> <a name="UserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.userManagedHttps"></a>

```go
UserManagedHttps CdnEndpointCustomDomainUserManagedHttps
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

user_managed_https block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#user_managed_https CdnEndpointCustomDomain#user_managed_https}

---

### CdnEndpointCustomDomainTimeouts <a name="CdnEndpointCustomDomainTimeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

&cdnendpointcustomdomain.CdnEndpointCustomDomainTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#create CdnEndpointCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#delete CdnEndpointCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#read CdnEndpointCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#update CdnEndpointCustomDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#create CdnEndpointCustomDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#delete CdnEndpointCustomDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#read CdnEndpointCustomDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#update CdnEndpointCustomDomain#update}.

---

### CdnEndpointCustomDomainUserManagedHttps <a name="CdnEndpointCustomDomainUserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

&cdnendpointcustomdomain.CdnEndpointCustomDomainUserManagedHttps {
	KeyVaultCertificateId: *string,
	KeyVaultSecretId: *string,
	TlsVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#key_vault_certificate_id CdnEndpointCustomDomain#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#key_vault_secret_id CdnEndpointCustomDomain#key_vault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.tlsVersion">TlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}. |

---

##### `KeyVaultCertificateId`<sup>Optional</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.keyVaultCertificateId"></a>

```go
KeyVaultCertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#key_vault_certificate_id CdnEndpointCustomDomain#key_vault_certificate_id}.

---

##### `KeyVaultSecretId`<sup>Optional</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.keyVaultSecretId"></a>

```go
KeyVaultSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#key_vault_secret_id CdnEndpointCustomDomain#key_vault_secret_id}.

---

##### `TlsVersion`<sup>Optional</sup> <a name="TlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.tlsVersion"></a>

```go
TlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnEndpointCustomDomainCdnManagedHttpsOutputReference <a name="CdnEndpointCustomDomainCdnManagedHttpsOutputReference" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

cdnendpointcustomdomain.NewCdnEndpointCustomDomainCdnManagedHttpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointCustomDomainCdnManagedHttpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resetTlsVersion">ResetTlsVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTlsVersion` <a name="ResetTlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resetTlsVersion"></a>

```go
func ResetTlsVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateTypeInput">CertificateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersionInput">TlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateType">CertificateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolType">ProtocolType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersion">TlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateTypeInput`<sup>Optional</sup> <a name="CertificateTypeInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateTypeInput"></a>

```go
func CertificateTypeInput() *string
```

- *Type:* *string

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolTypeInput"></a>

```go
func ProtocolTypeInput() *string
```

- *Type:* *string

---

##### `TlsVersionInput`<sup>Optional</sup> <a name="TlsVersionInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersionInput"></a>

```go
func TlsVersionInput() *string
```

- *Type:* *string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateType"></a>

```go
func CertificateType() *string
```

- *Type:* *string

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolType"></a>

```go
func ProtocolType() *string
```

- *Type:* *string

---

##### `TlsVersion`<sup>Required</sup> <a name="TlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersion"></a>

```go
func TlsVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointCustomDomainCdnManagedHttps
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

---


### CdnEndpointCustomDomainTimeoutsOutputReference <a name="CdnEndpointCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

cdnendpointcustomdomain.NewCdnEndpointCustomDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointCustomDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointCustomDomainUserManagedHttpsOutputReference <a name="CdnEndpointCustomDomainUserManagedHttpsOutputReference" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/cdnendpointcustomdomain"

cdnendpointcustomdomain.NewCdnEndpointCustomDomainUserManagedHttpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointCustomDomainUserManagedHttpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetKeyVaultCertificateId">ResetKeyVaultCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetKeyVaultSecretId">ResetKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetTlsVersion">ResetTlsVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyVaultCertificateId` <a name="ResetKeyVaultCertificateId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetKeyVaultCertificateId"></a>

```go
func ResetKeyVaultCertificateId()
```

##### `ResetKeyVaultSecretId` <a name="ResetKeyVaultSecretId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetKeyVaultSecretId"></a>

```go
func ResetKeyVaultSecretId()
```

##### `ResetTlsVersion` <a name="ResetTlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetTlsVersion"></a>

```go
func ResetTlsVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultCertificateIdInput">KeyVaultCertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretIdInput">KeyVaultSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersionInput">TlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretId">KeyVaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersion">TlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyVaultCertificateIdInput`<sup>Optional</sup> <a name="KeyVaultCertificateIdInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultCertificateIdInput"></a>

```go
func KeyVaultCertificateIdInput() *string
```

- *Type:* *string

---

##### `KeyVaultSecretIdInput`<sup>Optional</sup> <a name="KeyVaultSecretIdInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretIdInput"></a>

```go
func KeyVaultSecretIdInput() *string
```

- *Type:* *string

---

##### `TlsVersionInput`<sup>Optional</sup> <a name="TlsVersionInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersionInput"></a>

```go
func TlsVersionInput() *string
```

- *Type:* *string

---

##### `KeyVaultCertificateId`<sup>Required</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultCertificateId"></a>

```go
func KeyVaultCertificateId() *string
```

- *Type:* *string

---

##### `KeyVaultSecretId`<sup>Required</sup> <a name="KeyVaultSecretId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretId"></a>

```go
func KeyVaultSecretId() *string
```

- *Type:* *string

---

##### `TlsVersion`<sup>Required</sup> <a name="TlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersion"></a>

```go
func TlsVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointCustomDomainUserManagedHttps
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

---



