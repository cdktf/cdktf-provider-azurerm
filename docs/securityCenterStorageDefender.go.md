# `securityCenterStorageDefender` Submodule <a name="`securityCenterStorageDefender` Submodule" id="@cdktf/provider-azurerm.securityCenterStorageDefender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterStorageDefender <a name="SecurityCenterStorageDefender" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender azurerm_security_center_storage_defender}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/securitycenterstoragedefender"

securitycenterstoragedefender.NewSecurityCenterStorageDefender(scope Construct, id *string, config SecurityCenterStorageDefenderConfig) SecurityCenterStorageDefender
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig">SecurityCenterStorageDefenderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig">SecurityCenterStorageDefenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadCapGbPerMonth">ResetMalwareScanningOnUploadCapGbPerMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadEnabled">ResetMalwareScanningOnUploadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideSubscriptionSettingsEnabled">ResetOverrideSubscriptionSettingsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetSensitiveDataDiscoveryEnabled">ResetSensitiveDataDiscoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts"></a>

```go
func PutTimeouts(value SecurityCenterStorageDefenderTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetId"></a>

```go
func ResetId()
```

##### `ResetMalwareScanningOnUploadCapGbPerMonth` <a name="ResetMalwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadCapGbPerMonth"></a>

```go
func ResetMalwareScanningOnUploadCapGbPerMonth()
```

##### `ResetMalwareScanningOnUploadEnabled` <a name="ResetMalwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadEnabled"></a>

```go
func ResetMalwareScanningOnUploadEnabled()
```

##### `ResetOverrideSubscriptionSettingsEnabled` <a name="ResetOverrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideSubscriptionSettingsEnabled"></a>

```go
func ResetOverrideSubscriptionSettingsEnabled()
```

##### `ResetSensitiveDataDiscoveryEnabled` <a name="ResetSensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetSensitiveDataDiscoveryEnabled"></a>

```go
func ResetSensitiveDataDiscoveryEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityCenterStorageDefender resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/securitycenterstoragedefender"

securitycenterstoragedefender.SecurityCenterStorageDefender_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/securitycenterstoragedefender"

securitycenterstoragedefender.SecurityCenterStorageDefender_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/securitycenterstoragedefender"

securitycenterstoragedefender.SecurityCenterStorageDefender_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/securitycenterstoragedefender"

securitycenterstoragedefender.SecurityCenterStorageDefender_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecurityCenterStorageDefender resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityCenterStorageDefender to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityCenterStorageDefender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecurityCenterStorageDefender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference">SecurityCenterStorageDefenderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonthInput">MalwareScanningOnUploadCapGbPerMonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabledInput">MalwareScanningOnUploadEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabledInput">OverrideSubscriptionSettingsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabledInput">SensitiveDataDiscoveryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonth">MalwareScanningOnUploadCapGbPerMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabled">MalwareScanningOnUploadEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabled">OverrideSubscriptionSettingsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabled">SensitiveDataDiscoveryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeouts"></a>

```go
func Timeouts() SecurityCenterStorageDefenderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference">SecurityCenterStorageDefenderTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MalwareScanningOnUploadCapGbPerMonthInput`<sup>Optional</sup> <a name="MalwareScanningOnUploadCapGbPerMonthInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonthInput"></a>

```go
func MalwareScanningOnUploadCapGbPerMonthInput() *f64
```

- *Type:* *f64

---

##### `MalwareScanningOnUploadEnabledInput`<sup>Optional</sup> <a name="MalwareScanningOnUploadEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabledInput"></a>

```go
func MalwareScanningOnUploadEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OverrideSubscriptionSettingsEnabledInput`<sup>Optional</sup> <a name="OverrideSubscriptionSettingsEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabledInput"></a>

```go
func OverrideSubscriptionSettingsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SensitiveDataDiscoveryEnabledInput`<sup>Optional</sup> <a name="SensitiveDataDiscoveryEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabledInput"></a>

```go
func SensitiveDataDiscoveryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MalwareScanningOnUploadCapGbPerMonth`<sup>Required</sup> <a name="MalwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonth"></a>

```go
func MalwareScanningOnUploadCapGbPerMonth() *f64
```

- *Type:* *f64

---

##### `MalwareScanningOnUploadEnabled`<sup>Required</sup> <a name="MalwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabled"></a>

```go
func MalwareScanningOnUploadEnabled() interface{}
```

- *Type:* interface{}

---

##### `OverrideSubscriptionSettingsEnabled`<sup>Required</sup> <a name="OverrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabled"></a>

```go
func OverrideSubscriptionSettingsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SensitiveDataDiscoveryEnabled`<sup>Required</sup> <a name="SensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabled"></a>

```go
func SensitiveDataDiscoveryEnabled() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterStorageDefenderConfig <a name="SecurityCenterStorageDefenderConfig" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/securitycenterstoragedefender"

&securitycenterstoragedefender.SecurityCenterStorageDefenderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StorageAccountId: *string,
	Id: *string,
	MalwareScanningOnUploadCapGbPerMonth: *f64,
	MalwareScanningOnUploadEnabled: interface{},
	OverrideSubscriptionSettingsEnabled: interface{},
	SensitiveDataDiscoveryEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#storage_account_id SecurityCenterStorageDefender#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#id SecurityCenterStorageDefender#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadCapGbPerMonth">MalwareScanningOnUploadCapGbPerMonth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_cap_gb_per_month SecurityCenterStorageDefender#malware_scanning_on_upload_cap_gb_per_month}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadEnabled">MalwareScanningOnUploadEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_enabled SecurityCenterStorageDefender#malware_scanning_on_upload_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.overrideSubscriptionSettingsEnabled">OverrideSubscriptionSettingsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#override_subscription_settings_enabled SecurityCenterStorageDefender#override_subscription_settings_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.sensitiveDataDiscoveryEnabled">SensitiveDataDiscoveryEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#sensitive_data_discovery_enabled SecurityCenterStorageDefender#sensitive_data_discovery_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#storage_account_id SecurityCenterStorageDefender#storage_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#id SecurityCenterStorageDefender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MalwareScanningOnUploadCapGbPerMonth`<sup>Optional</sup> <a name="MalwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadCapGbPerMonth"></a>

```go
MalwareScanningOnUploadCapGbPerMonth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_cap_gb_per_month SecurityCenterStorageDefender#malware_scanning_on_upload_cap_gb_per_month}.

---

##### `MalwareScanningOnUploadEnabled`<sup>Optional</sup> <a name="MalwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadEnabled"></a>

```go
MalwareScanningOnUploadEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_enabled SecurityCenterStorageDefender#malware_scanning_on_upload_enabled}.

---

##### `OverrideSubscriptionSettingsEnabled`<sup>Optional</sup> <a name="OverrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.overrideSubscriptionSettingsEnabled"></a>

```go
OverrideSubscriptionSettingsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#override_subscription_settings_enabled SecurityCenterStorageDefender#override_subscription_settings_enabled}.

---

##### `SensitiveDataDiscoveryEnabled`<sup>Optional</sup> <a name="SensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.sensitiveDataDiscoveryEnabled"></a>

```go
SensitiveDataDiscoveryEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#sensitive_data_discovery_enabled SecurityCenterStorageDefender#sensitive_data_discovery_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.timeouts"></a>

```go
Timeouts SecurityCenterStorageDefenderTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#timeouts SecurityCenterStorageDefender#timeouts}

---

### SecurityCenterStorageDefenderTimeouts <a name="SecurityCenterStorageDefenderTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/securitycenterstoragedefender"

&securitycenterstoragedefender.SecurityCenterStorageDefenderTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#create SecurityCenterStorageDefender#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#delete SecurityCenterStorageDefender#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#read SecurityCenterStorageDefender#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#update SecurityCenterStorageDefender#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#create SecurityCenterStorageDefender#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#delete SecurityCenterStorageDefender#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#read SecurityCenterStorageDefender#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/security_center_storage_defender#update SecurityCenterStorageDefender#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterStorageDefenderTimeoutsOutputReference <a name="SecurityCenterStorageDefenderTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/securitycenterstoragedefender"

securitycenterstoragedefender.NewSecurityCenterStorageDefenderTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityCenterStorageDefenderTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



