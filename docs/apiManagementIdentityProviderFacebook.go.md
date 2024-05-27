# `apiManagementIdentityProviderFacebook` Submodule <a name="`apiManagementIdentityProviderFacebook` Submodule" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementIdentityProviderFacebook <a name="ApiManagementIdentityProviderFacebook" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook azurerm_api_management_identity_provider_facebook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/apimanagementidentityproviderfacebook"

apimanagementidentityproviderfacebook.NewApiManagementIdentityProviderFacebook(scope Construct, id *string, config ApiManagementIdentityProviderFacebookConfig) ApiManagementIdentityProviderFacebook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig">ApiManagementIdentityProviderFacebookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig">ApiManagementIdentityProviderFacebookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementIdentityProviderFacebookTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts">ApiManagementIdentityProviderFacebookTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementIdentityProviderFacebook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/apimanagementidentityproviderfacebook"

apimanagementidentityproviderfacebook.ApiManagementIdentityProviderFacebook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/apimanagementidentityproviderfacebook"

apimanagementidentityproviderfacebook.ApiManagementIdentityProviderFacebook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/apimanagementidentityproviderfacebook"

apimanagementidentityproviderfacebook.ApiManagementIdentityProviderFacebook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/apimanagementidentityproviderfacebook"

apimanagementidentityproviderfacebook.ApiManagementIdentityProviderFacebook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiManagementIdentityProviderFacebook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiManagementIdentityProviderFacebook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiManagementIdentityProviderFacebook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementIdentityProviderFacebook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference">ApiManagementIdentityProviderFacebookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appSecretInput">AppSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appSecret">AppSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.timeouts"></a>

```go
func Timeouts() ApiManagementIdentityProviderFacebookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference">ApiManagementIdentityProviderFacebookTimeoutsOutputReference</a>

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.apiManagementNameInput"></a>

```go
func ApiManagementNameInput() *string
```

- *Type:* *string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `AppSecretInput`<sup>Optional</sup> <a name="AppSecretInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appSecretInput"></a>

```go
func AppSecretInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.apiManagementName"></a>

```go
func ApiManagementName() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.appSecret"></a>

```go
func AppSecret() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementIdentityProviderFacebookConfig <a name="ApiManagementIdentityProviderFacebookConfig" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/apimanagementidentityproviderfacebook"

&apimanagementidentityproviderfacebook.ApiManagementIdentityProviderFacebookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementName: *string,
	AppId: *string,
	AppSecret: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#api_management_name ApiManagementIdentityProviderFacebook#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#app_id ApiManagementIdentityProviderFacebook#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.appSecret">AppSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#app_secret ApiManagementIdentityProviderFacebook#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#resource_group_name ApiManagementIdentityProviderFacebook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#id ApiManagementIdentityProviderFacebook#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts">ApiManagementIdentityProviderFacebookTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.apiManagementName"></a>

```go
ApiManagementName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#api_management_name ApiManagementIdentityProviderFacebook#api_management_name}.

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#app_id ApiManagementIdentityProviderFacebook#app_id}.

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.appSecret"></a>

```go
AppSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#app_secret ApiManagementIdentityProviderFacebook#app_secret}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#resource_group_name ApiManagementIdentityProviderFacebook#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#id ApiManagementIdentityProviderFacebook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookConfig.property.timeouts"></a>

```go
Timeouts ApiManagementIdentityProviderFacebookTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts">ApiManagementIdentityProviderFacebookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#timeouts ApiManagementIdentityProviderFacebook#timeouts}

---

### ApiManagementIdentityProviderFacebookTimeouts <a name="ApiManagementIdentityProviderFacebookTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/apimanagementidentityproviderfacebook"

&apimanagementidentityproviderfacebook.ApiManagementIdentityProviderFacebookTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#create ApiManagementIdentityProviderFacebook#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#delete ApiManagementIdentityProviderFacebook#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#read ApiManagementIdentityProviderFacebook#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#update ApiManagementIdentityProviderFacebook#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#create ApiManagementIdentityProviderFacebook#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#delete ApiManagementIdentityProviderFacebook#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#read ApiManagementIdentityProviderFacebook#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/api_management_identity_provider_facebook#update ApiManagementIdentityProviderFacebook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementIdentityProviderFacebookTimeoutsOutputReference <a name="ApiManagementIdentityProviderFacebookTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/apimanagementidentityproviderfacebook"

apimanagementidentityproviderfacebook.NewApiManagementIdentityProviderFacebookTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementIdentityProviderFacebookTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementIdentityProviderFacebook.ApiManagementIdentityProviderFacebookTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



