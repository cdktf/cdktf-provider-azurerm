# `springCloudDevToolPortal` Submodule <a name="`springCloudDevToolPortal` Submodule" id="@cdktf/provider-azurerm.springCloudDevToolPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudDevToolPortal <a name="SpringCloudDevToolPortal" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal azurerm_spring_cloud_dev_tool_portal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springclouddevtoolportal"

springclouddevtoolportal.NewSpringCloudDevToolPortal(scope Construct, id *string, config SpringCloudDevToolPortalConfig) SpringCloudDevToolPortal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig">SpringCloudDevToolPortalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig">SpringCloudDevToolPortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putSso">PutSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationAcceleratorEnabled">ResetApplicationAcceleratorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationLiveViewEnabled">ResetApplicationLiveViewEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetSso">ResetSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSso` <a name="PutSso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putSso"></a>

```go
func PutSso(value SpringCloudDevToolPortalSso)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putSso.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putTimeouts"></a>

```go
func PutTimeouts(value SpringCloudDevToolPortalTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a>

---

##### `ResetApplicationAcceleratorEnabled` <a name="ResetApplicationAcceleratorEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationAcceleratorEnabled"></a>

```go
func ResetApplicationAcceleratorEnabled()
```

##### `ResetApplicationLiveViewEnabled` <a name="ResetApplicationLiveViewEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationLiveViewEnabled"></a>

```go
func ResetApplicationLiveViewEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetId"></a>

```go
func ResetId()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetSso` <a name="ResetSso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetSso"></a>

```go
func ResetSso()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudDevToolPortal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springclouddevtoolportal"

springclouddevtoolportal.SpringCloudDevToolPortal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springclouddevtoolportal"

springclouddevtoolportal.SpringCloudDevToolPortal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springclouddevtoolportal"

springclouddevtoolportal.SpringCloudDevToolPortal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springclouddevtoolportal"

springclouddevtoolportal.SpringCloudDevToolPortal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpringCloudDevToolPortal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpringCloudDevToolPortal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpringCloudDevToolPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudDevToolPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.sso">Sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference">SpringCloudDevToolPortalSsoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference">SpringCloudDevToolPortalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabledInput">ApplicationAcceleratorEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabledInput">ApplicationLiveViewEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceIdInput">SpringCloudServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.ssoInput">SsoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabled">ApplicationAcceleratorEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabled">ApplicationLiveViewEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Sso`<sup>Required</sup> <a name="Sso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.sso"></a>

```go
func Sso() SpringCloudDevToolPortalSsoOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference">SpringCloudDevToolPortalSsoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeouts"></a>

```go
func Timeouts() SpringCloudDevToolPortalTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference">SpringCloudDevToolPortalTimeoutsOutputReference</a>

---

##### `ApplicationAcceleratorEnabledInput`<sup>Optional</sup> <a name="ApplicationAcceleratorEnabledInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabledInput"></a>

```go
func ApplicationAcceleratorEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationLiveViewEnabledInput`<sup>Optional</sup> <a name="ApplicationLiveViewEnabledInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabledInput"></a>

```go
func ApplicationLiveViewEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SpringCloudServiceIdInput`<sup>Optional</sup> <a name="SpringCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceIdInput"></a>

```go
func SpringCloudServiceIdInput() *string
```

- *Type:* *string

---

##### `SsoInput`<sup>Optional</sup> <a name="SsoInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.ssoInput"></a>

```go
func SsoInput() SpringCloudDevToolPortalSso
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationAcceleratorEnabled`<sup>Required</sup> <a name="ApplicationAcceleratorEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabled"></a>

```go
func ApplicationAcceleratorEnabled() interface{}
```

- *Type:* interface{}

---

##### `ApplicationLiveViewEnabled`<sup>Required</sup> <a name="ApplicationLiveViewEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabled"></a>

```go
func ApplicationLiveViewEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceId"></a>

```go
func SpringCloudServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudDevToolPortalConfig <a name="SpringCloudDevToolPortalConfig" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springclouddevtoolportal"

&springclouddevtoolportal.SpringCloudDevToolPortalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SpringCloudServiceId: *string,
	ApplicationAcceleratorEnabled: interface{},
	ApplicationLiveViewEnabled: interface{},
	Id: *string,
	PublicNetworkAccessEnabled: interface{},
	Sso: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#name SpringCloudDevToolPortal#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#spring_cloud_service_id SpringCloudDevToolPortal#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationAcceleratorEnabled">ApplicationAcceleratorEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#application_accelerator_enabled SpringCloudDevToolPortal#application_accelerator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationLiveViewEnabled">ApplicationLiveViewEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#application_live_view_enabled SpringCloudDevToolPortal#application_live_view_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#id SpringCloudDevToolPortal#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#public_network_access_enabled SpringCloudDevToolPortal#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.sso">Sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a></code> | sso block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#name SpringCloudDevToolPortal#name}.

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.springCloudServiceId"></a>

```go
SpringCloudServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#spring_cloud_service_id SpringCloudDevToolPortal#spring_cloud_service_id}.

---

##### `ApplicationAcceleratorEnabled`<sup>Optional</sup> <a name="ApplicationAcceleratorEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationAcceleratorEnabled"></a>

```go
ApplicationAcceleratorEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#application_accelerator_enabled SpringCloudDevToolPortal#application_accelerator_enabled}.

---

##### `ApplicationLiveViewEnabled`<sup>Optional</sup> <a name="ApplicationLiveViewEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationLiveViewEnabled"></a>

```go
ApplicationLiveViewEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#application_live_view_enabled SpringCloudDevToolPortal#application_live_view_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#id SpringCloudDevToolPortal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#public_network_access_enabled SpringCloudDevToolPortal#public_network_access_enabled}.

---

##### `Sso`<sup>Optional</sup> <a name="Sso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.sso"></a>

```go
Sso SpringCloudDevToolPortalSso
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#sso SpringCloudDevToolPortal#sso}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.timeouts"></a>

```go
Timeouts SpringCloudDevToolPortalTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#timeouts SpringCloudDevToolPortal#timeouts}

---

### SpringCloudDevToolPortalSso <a name="SpringCloudDevToolPortalSso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springclouddevtoolportal"

&springclouddevtoolportal.SpringCloudDevToolPortalSso {
	ClientId: *string,
	ClientSecret: *string,
	MetadataUrl: *string,
	Scope: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#client_id SpringCloudDevToolPortal#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#client_secret SpringCloudDevToolPortal#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.metadataUrl">MetadataUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#metadata_url SpringCloudDevToolPortal#metadata_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.scope">Scope</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#scope SpringCloudDevToolPortal#scope}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#client_id SpringCloudDevToolPortal#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#client_secret SpringCloudDevToolPortal#client_secret}.

---

##### `MetadataUrl`<sup>Optional</sup> <a name="MetadataUrl" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.metadataUrl"></a>

```go
MetadataUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#metadata_url SpringCloudDevToolPortal#metadata_url}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.scope"></a>

```go
Scope *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#scope SpringCloudDevToolPortal#scope}.

---

### SpringCloudDevToolPortalTimeouts <a name="SpringCloudDevToolPortalTimeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springclouddevtoolportal"

&springclouddevtoolportal.SpringCloudDevToolPortalTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#create SpringCloudDevToolPortal#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#delete SpringCloudDevToolPortal#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#read SpringCloudDevToolPortal#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#update SpringCloudDevToolPortal#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#create SpringCloudDevToolPortal#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#delete SpringCloudDevToolPortal#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#read SpringCloudDevToolPortal#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/spring_cloud_dev_tool_portal#update SpringCloudDevToolPortal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudDevToolPortalSsoOutputReference <a name="SpringCloudDevToolPortalSsoOutputReference" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springclouddevtoolportal"

springclouddevtoolportal.NewSpringCloudDevToolPortalSsoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudDevToolPortalSsoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetMetadataUrl">ResetMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetMetadataUrl` <a name="ResetMetadataUrl" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetMetadataUrl"></a>

```go
func ResetMetadataUrl()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrlInput">MetadataUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrl">MetadataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scope">Scope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `MetadataUrlInput`<sup>Optional</sup> <a name="MetadataUrlInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrlInput"></a>

```go
func MetadataUrlInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `MetadataUrl`<sup>Required</sup> <a name="MetadataUrl" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrl"></a>

```go
func MetadataUrl() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scope"></a>

```go
func Scope() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudDevToolPortalSso
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

---


### SpringCloudDevToolPortalTimeoutsOutputReference <a name="SpringCloudDevToolPortalTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springclouddevtoolportal"

springclouddevtoolportal.NewSpringCloudDevToolPortalTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudDevToolPortalTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



