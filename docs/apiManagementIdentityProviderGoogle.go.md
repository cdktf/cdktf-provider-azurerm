# `apiManagementIdentityProviderGoogle` Submodule <a name="`apiManagementIdentityProviderGoogle` Submodule" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementIdentityProviderGoogle <a name="ApiManagementIdentityProviderGoogle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google azurerm_api_management_identity_provider_google}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementidentityprovidergoogle"

apimanagementidentityprovidergoogle.NewApiManagementIdentityProviderGoogle(scope Construct, id *string, config ApiManagementIdentityProviderGoogleConfig) ApiManagementIdentityProviderGoogle
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig">ApiManagementIdentityProviderGoogleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig">ApiManagementIdentityProviderGoogleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementIdentityProviderGoogleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts">ApiManagementIdentityProviderGoogleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementIdentityProviderGoogle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementidentityprovidergoogle"

apimanagementidentityprovidergoogle.ApiManagementIdentityProviderGoogle_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementidentityprovidergoogle"

apimanagementidentityprovidergoogle.ApiManagementIdentityProviderGoogle_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementidentityprovidergoogle"

apimanagementidentityprovidergoogle.ApiManagementIdentityProviderGoogle_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementidentityprovidergoogle"

apimanagementidentityprovidergoogle.ApiManagementIdentityProviderGoogle_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiManagementIdentityProviderGoogle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiManagementIdentityProviderGoogle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiManagementIdentityProviderGoogle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementIdentityProviderGoogle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference">ApiManagementIdentityProviderGoogleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.timeouts"></a>

```go
func Timeouts() ApiManagementIdentityProviderGoogleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference">ApiManagementIdentityProviderGoogleTimeoutsOutputReference</a>

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.apiManagementNameInput"></a>

```go
func ApiManagementNameInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.apiManagementName"></a>

```go
func ApiManagementName() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogle.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementIdentityProviderGoogleConfig <a name="ApiManagementIdentityProviderGoogleConfig" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementidentityprovidergoogle"

&apimanagementidentityprovidergoogle.ApiManagementIdentityProviderGoogleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementName: *string,
	ClientId: *string,
	ClientSecret: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#api_management_name ApiManagementIdentityProviderGoogle#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#client_id ApiManagementIdentityProviderGoogle#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#client_secret ApiManagementIdentityProviderGoogle#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#resource_group_name ApiManagementIdentityProviderGoogle#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#id ApiManagementIdentityProviderGoogle#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts">ApiManagementIdentityProviderGoogleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.apiManagementName"></a>

```go
ApiManagementName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#api_management_name ApiManagementIdentityProviderGoogle#api_management_name}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#client_id ApiManagementIdentityProviderGoogle#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#client_secret ApiManagementIdentityProviderGoogle#client_secret}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#resource_group_name ApiManagementIdentityProviderGoogle#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#id ApiManagementIdentityProviderGoogle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleConfig.property.timeouts"></a>

```go
Timeouts ApiManagementIdentityProviderGoogleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts">ApiManagementIdentityProviderGoogleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#timeouts ApiManagementIdentityProviderGoogle#timeouts}

---

### ApiManagementIdentityProviderGoogleTimeouts <a name="ApiManagementIdentityProviderGoogleTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementidentityprovidergoogle"

&apimanagementidentityprovidergoogle.ApiManagementIdentityProviderGoogleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#create ApiManagementIdentityProviderGoogle#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#delete ApiManagementIdentityProviderGoogle#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#read ApiManagementIdentityProviderGoogle#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#update ApiManagementIdentityProviderGoogle#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#create ApiManagementIdentityProviderGoogle#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#delete ApiManagementIdentityProviderGoogle#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#read ApiManagementIdentityProviderGoogle#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/api_management_identity_provider_google#update ApiManagementIdentityProviderGoogle#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementIdentityProviderGoogleTimeoutsOutputReference <a name="ApiManagementIdentityProviderGoogleTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementidentityprovidergoogle"

apimanagementidentityprovidergoogle.NewApiManagementIdentityProviderGoogleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementIdentityProviderGoogleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementIdentityProviderGoogle.ApiManagementIdentityProviderGoogleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



