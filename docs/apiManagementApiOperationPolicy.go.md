# `apiManagementApiOperationPolicy` Submodule <a name="`apiManagementApiOperationPolicy` Submodule" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApiOperationPolicy <a name="ApiManagementApiOperationPolicy" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy azurerm_api_management_api_operation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementapioperationpolicy"

apimanagementapioperationpolicy.NewApiManagementApiOperationPolicy(scope Construct, id *string, config ApiManagementApiOperationPolicyConfig) ApiManagementApiOperationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig">ApiManagementApiOperationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig">ApiManagementApiOperationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.resetXmlContent">ResetXmlContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.resetXmlLink">ResetXmlLink</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementApiOperationPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts">ApiManagementApiOperationPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetXmlContent` <a name="ResetXmlContent" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.resetXmlContent"></a>

```go
func ResetXmlContent()
```

##### `ResetXmlLink` <a name="ResetXmlLink" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.resetXmlLink"></a>

```go
func ResetXmlLink()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementApiOperationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementapioperationpolicy"

apimanagementapioperationpolicy.ApiManagementApiOperationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementapioperationpolicy"

apimanagementapioperationpolicy.ApiManagementApiOperationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementapioperationpolicy"

apimanagementapioperationpolicy.ApiManagementApiOperationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementapioperationpolicy"

apimanagementapioperationpolicy.ApiManagementApiOperationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiManagementApiOperationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiManagementApiOperationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiManagementApiOperationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApiOperationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference">ApiManagementApiOperationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.apiNameInput">ApiNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.operationIdInput">OperationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.xmlContentInput">XmlContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.xmlLinkInput">XmlLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.apiName">ApiName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.operationId">OperationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.xmlContent">XmlContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.xmlLink">XmlLink</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.timeouts"></a>

```go
func Timeouts() ApiManagementApiOperationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference">ApiManagementApiOperationPolicyTimeoutsOutputReference</a>

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.apiManagementNameInput"></a>

```go
func ApiManagementNameInput() *string
```

- *Type:* *string

---

##### `ApiNameInput`<sup>Optional</sup> <a name="ApiNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.apiNameInput"></a>

```go
func ApiNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OperationIdInput`<sup>Optional</sup> <a name="OperationIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.operationIdInput"></a>

```go
func OperationIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `XmlContentInput`<sup>Optional</sup> <a name="XmlContentInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.xmlContentInput"></a>

```go
func XmlContentInput() *string
```

- *Type:* *string

---

##### `XmlLinkInput`<sup>Optional</sup> <a name="XmlLinkInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.xmlLinkInput"></a>

```go
func XmlLinkInput() *string
```

- *Type:* *string

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.apiManagementName"></a>

```go
func ApiManagementName() *string
```

- *Type:* *string

---

##### `ApiName`<sup>Required</sup> <a name="ApiName" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.apiName"></a>

```go
func ApiName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.operationId"></a>

```go
func OperationId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `XmlContent`<sup>Required</sup> <a name="XmlContent" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.xmlContent"></a>

```go
func XmlContent() *string
```

- *Type:* *string

---

##### `XmlLink`<sup>Required</sup> <a name="XmlLink" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.xmlLink"></a>

```go
func XmlLink() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiOperationPolicyConfig <a name="ApiManagementApiOperationPolicyConfig" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementapioperationpolicy"

&apimanagementapioperationpolicy.ApiManagementApiOperationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementName: *string,
	ApiName: *string,
	OperationId: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts,
	XmlContent: *string,
	XmlLink: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#api_management_name ApiManagementApiOperationPolicy#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.apiName">ApiName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#api_name ApiManagementApiOperationPolicy#api_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.operationId">OperationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#operation_id ApiManagementApiOperationPolicy#operation_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#resource_group_name ApiManagementApiOperationPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#id ApiManagementApiOperationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts">ApiManagementApiOperationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.xmlContent">XmlContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#xml_content ApiManagementApiOperationPolicy#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.xmlLink">XmlLink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#xml_link ApiManagementApiOperationPolicy#xml_link}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.apiManagementName"></a>

```go
ApiManagementName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#api_management_name ApiManagementApiOperationPolicy#api_management_name}.

---

##### `ApiName`<sup>Required</sup> <a name="ApiName" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.apiName"></a>

```go
ApiName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#api_name ApiManagementApiOperationPolicy#api_name}.

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.operationId"></a>

```go
OperationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#operation_id ApiManagementApiOperationPolicy#operation_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#resource_group_name ApiManagementApiOperationPolicy#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#id ApiManagementApiOperationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.timeouts"></a>

```go
Timeouts ApiManagementApiOperationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts">ApiManagementApiOperationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#timeouts ApiManagementApiOperationPolicy#timeouts}

---

##### `XmlContent`<sup>Optional</sup> <a name="XmlContent" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.xmlContent"></a>

```go
XmlContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#xml_content ApiManagementApiOperationPolicy#xml_content}.

---

##### `XmlLink`<sup>Optional</sup> <a name="XmlLink" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyConfig.property.xmlLink"></a>

```go
XmlLink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#xml_link ApiManagementApiOperationPolicy#xml_link}.

---

### ApiManagementApiOperationPolicyTimeouts <a name="ApiManagementApiOperationPolicyTimeouts" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementapioperationpolicy"

&apimanagementapioperationpolicy.ApiManagementApiOperationPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#create ApiManagementApiOperationPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#delete ApiManagementApiOperationPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#read ApiManagementApiOperationPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#update ApiManagementApiOperationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#create ApiManagementApiOperationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#delete ApiManagementApiOperationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#read ApiManagementApiOperationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/api_management_api_operation_policy#update ApiManagementApiOperationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiOperationPolicyTimeoutsOutputReference <a name="ApiManagementApiOperationPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementapioperationpolicy"

apimanagementapioperationpolicy.NewApiManagementApiOperationPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiOperationPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperationPolicy.ApiManagementApiOperationPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



