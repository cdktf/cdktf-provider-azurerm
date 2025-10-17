# `apiManagementWorkspacePolicyFragment` Submodule <a name="`apiManagementWorkspacePolicyFragment` Submodule" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementWorkspacePolicyFragment <a name="ApiManagementWorkspacePolicyFragment" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment azurerm_api_management_workspace_policy_fragment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementworkspacepolicyfragment"

apimanagementworkspacepolicyfragment.NewApiManagementWorkspacePolicyFragment(scope Construct, id *string, config ApiManagementWorkspacePolicyFragmentConfig) ApiManagementWorkspacePolicyFragment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig">ApiManagementWorkspacePolicyFragmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig">ApiManagementWorkspacePolicyFragmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetXmlFormat">ResetXmlFormat</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementWorkspacePolicyFragmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetXmlFormat` <a name="ResetXmlFormat" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.resetXmlFormat"></a>

```go
func ResetXmlFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementWorkspacePolicyFragment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementworkspacepolicyfragment"

apimanagementworkspacepolicyfragment.ApiManagementWorkspacePolicyFragment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementworkspacepolicyfragment"

apimanagementworkspacepolicyfragment.ApiManagementWorkspacePolicyFragment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementworkspacepolicyfragment"

apimanagementworkspacepolicyfragment.ApiManagementWorkspacePolicyFragment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementworkspacepolicyfragment"

apimanagementworkspacepolicyfragment.ApiManagementWorkspacePolicyFragment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiManagementWorkspacePolicyFragment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiManagementWorkspacePolicyFragment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiManagementWorkspacePolicyFragment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementWorkspacePolicyFragment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference">ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceIdInput">ApiManagementWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContentInput">XmlContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormatInput">XmlFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceId">ApiManagementWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContent">XmlContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormat">XmlFormat</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeouts"></a>

```go
func Timeouts() ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference">ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference</a>

---

##### `ApiManagementWorkspaceIdInput`<sup>Optional</sup> <a name="ApiManagementWorkspaceIdInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceIdInput"></a>

```go
func ApiManagementWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `XmlContentInput`<sup>Optional</sup> <a name="XmlContentInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContentInput"></a>

```go
func XmlContentInput() *string
```

- *Type:* *string

---

##### `XmlFormatInput`<sup>Optional</sup> <a name="XmlFormatInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormatInput"></a>

```go
func XmlFormatInput() *string
```

- *Type:* *string

---

##### `ApiManagementWorkspaceId`<sup>Required</sup> <a name="ApiManagementWorkspaceId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.apiManagementWorkspaceId"></a>

```go
func ApiManagementWorkspaceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `XmlContent`<sup>Required</sup> <a name="XmlContent" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlContent"></a>

```go
func XmlContent() *string
```

- *Type:* *string

---

##### `XmlFormat`<sup>Required</sup> <a name="XmlFormat" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.xmlFormat"></a>

```go
func XmlFormat() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementWorkspacePolicyFragmentConfig <a name="ApiManagementWorkspacePolicyFragmentConfig" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementworkspacepolicyfragment"

&apimanagementworkspacepolicyfragment.ApiManagementWorkspacePolicyFragmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementWorkspaceId: *string,
	Name: *string,
	XmlContent: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts,
	XmlFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.apiManagementWorkspaceId">ApiManagementWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#api_management_workspace_id ApiManagementWorkspacePolicyFragment#api_management_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#name ApiManagementWorkspacePolicyFragment#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlContent">XmlContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_content ApiManagementWorkspacePolicyFragment#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#description ApiManagementWorkspacePolicyFragment#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#id ApiManagementWorkspacePolicyFragment#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlFormat">XmlFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_format ApiManagementWorkspacePolicyFragment#xml_format}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementWorkspaceId`<sup>Required</sup> <a name="ApiManagementWorkspaceId" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.apiManagementWorkspaceId"></a>

```go
ApiManagementWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#api_management_workspace_id ApiManagementWorkspacePolicyFragment#api_management_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#name ApiManagementWorkspacePolicyFragment#name}.

---

##### `XmlContent`<sup>Required</sup> <a name="XmlContent" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlContent"></a>

```go
XmlContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_content ApiManagementWorkspacePolicyFragment#xml_content}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#description ApiManagementWorkspacePolicyFragment#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#id ApiManagementWorkspacePolicyFragment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.timeouts"></a>

```go
Timeouts ApiManagementWorkspacePolicyFragmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts">ApiManagementWorkspacePolicyFragmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#timeouts ApiManagementWorkspacePolicyFragment#timeouts}

---

##### `XmlFormat`<sup>Optional</sup> <a name="XmlFormat" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentConfig.property.xmlFormat"></a>

```go
XmlFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#xml_format ApiManagementWorkspacePolicyFragment#xml_format}.

---

### ApiManagementWorkspacePolicyFragmentTimeouts <a name="ApiManagementWorkspacePolicyFragmentTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementworkspacepolicyfragment"

&apimanagementworkspacepolicyfragment.ApiManagementWorkspacePolicyFragmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#create ApiManagementWorkspacePolicyFragment#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#delete ApiManagementWorkspacePolicyFragment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#read ApiManagementWorkspacePolicyFragment#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#update ApiManagementWorkspacePolicyFragment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#create ApiManagementWorkspacePolicyFragment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#delete ApiManagementWorkspacePolicyFragment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#read ApiManagementWorkspacePolicyFragment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/api_management_workspace_policy_fragment#update ApiManagementWorkspacePolicyFragment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference <a name="ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementworkspacepolicyfragment"

apimanagementworkspacepolicyfragment.NewApiManagementWorkspacePolicyFragmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementWorkspacePolicyFragment.ApiManagementWorkspacePolicyFragmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



