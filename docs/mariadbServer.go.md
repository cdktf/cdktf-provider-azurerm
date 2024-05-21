# `mariadbServer` Submodule <a name="`mariadbServer` Submodule" id="@cdktf/provider-azurerm.mariadbServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MariadbServer <a name="MariadbServer" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server azurerm_mariadb_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/mariadbserver"

mariadbserver.NewMariadbServer(scope Construct, id *string, config MariadbServerConfig) MariadbServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig">MariadbServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig">MariadbServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAdministratorLogin">ResetAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAdministratorLoginPassword">ResetAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAutoGrowEnabled">ResetAutoGrowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetBackupRetentionDays">ResetBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetCreateMode">ResetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetCreationSourceServerId">ResetCreationSourceServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetGeoRedundantBackupEnabled">ResetGeoRedundantBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetRestorePointInTime">ResetRestorePointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetSslMinimalTlsVersionEnforced">ResetSslMinimalTlsVersionEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetStorageMb">ResetStorageMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.putTimeouts"></a>

```go
func PutTimeouts(value MariadbServerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts">MariadbServerTimeouts</a>

---

##### `ResetAdministratorLogin` <a name="ResetAdministratorLogin" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAdministratorLogin"></a>

```go
func ResetAdministratorLogin()
```

##### `ResetAdministratorLoginPassword` <a name="ResetAdministratorLoginPassword" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAdministratorLoginPassword"></a>

```go
func ResetAdministratorLoginPassword()
```

##### `ResetAutoGrowEnabled` <a name="ResetAutoGrowEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetAutoGrowEnabled"></a>

```go
func ResetAutoGrowEnabled()
```

##### `ResetBackupRetentionDays` <a name="ResetBackupRetentionDays" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetBackupRetentionDays"></a>

```go
func ResetBackupRetentionDays()
```

##### `ResetCreateMode` <a name="ResetCreateMode" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetCreateMode"></a>

```go
func ResetCreateMode()
```

##### `ResetCreationSourceServerId` <a name="ResetCreationSourceServerId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetCreationSourceServerId"></a>

```go
func ResetCreationSourceServerId()
```

##### `ResetGeoRedundantBackupEnabled` <a name="ResetGeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetGeoRedundantBackupEnabled"></a>

```go
func ResetGeoRedundantBackupEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetId"></a>

```go
func ResetId()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetRestorePointInTime` <a name="ResetRestorePointInTime" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetRestorePointInTime"></a>

```go
func ResetRestorePointInTime()
```

##### `ResetSslMinimalTlsVersionEnforced` <a name="ResetSslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetSslMinimalTlsVersionEnforced"></a>

```go
func ResetSslMinimalTlsVersionEnforced()
```

##### `ResetStorageMb` <a name="ResetStorageMb" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetStorageMb"></a>

```go
func ResetStorageMb()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MariadbServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/mariadbserver"

mariadbserver.MariadbServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/mariadbserver"

mariadbserver.MariadbServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/mariadbserver"

mariadbserver.MariadbServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/mariadbserver"

mariadbserver.MariadbServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MariadbServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MariadbServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MariadbServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MariadbServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference">MariadbServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginInput">AdministratorLoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginPasswordInput">AdministratorLoginPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.autoGrowEnabledInput">AutoGrowEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.backupRetentionDaysInput">BackupRetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.createModeInput">CreateModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.creationSourceServerIdInput">CreationSourceServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.geoRedundantBackupEnabledInput">GeoRedundantBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.restorePointInTimeInput">RestorePointInTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslEnforcementEnabledInput">SslEnforcementEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslMinimalTlsVersionEnforcedInput">SslMinimalTlsVersionEnforcedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.storageMbInput">StorageMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.autoGrowEnabled">AutoGrowEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.backupRetentionDays">BackupRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.createMode">CreateMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.creationSourceServerId">CreationSourceServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.geoRedundantBackupEnabled">GeoRedundantBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.restorePointInTime">RestorePointInTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslEnforcementEnabled">SslEnforcementEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslMinimalTlsVersionEnforced">SslMinimalTlsVersionEnforced</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.storageMb">StorageMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.timeouts"></a>

```go
func Timeouts() MariadbServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference">MariadbServerTimeoutsOutputReference</a>

---

##### `AdministratorLoginInput`<sup>Optional</sup> <a name="AdministratorLoginInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginInput"></a>

```go
func AdministratorLoginInput() *string
```

- *Type:* *string

---

##### `AdministratorLoginPasswordInput`<sup>Optional</sup> <a name="AdministratorLoginPasswordInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginPasswordInput"></a>

```go
func AdministratorLoginPasswordInput() *string
```

- *Type:* *string

---

##### `AutoGrowEnabledInput`<sup>Optional</sup> <a name="AutoGrowEnabledInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.autoGrowEnabledInput"></a>

```go
func AutoGrowEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BackupRetentionDaysInput`<sup>Optional</sup> <a name="BackupRetentionDaysInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.backupRetentionDaysInput"></a>

```go
func BackupRetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `CreateModeInput`<sup>Optional</sup> <a name="CreateModeInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.createModeInput"></a>

```go
func CreateModeInput() *string
```

- *Type:* *string

---

##### `CreationSourceServerIdInput`<sup>Optional</sup> <a name="CreationSourceServerIdInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.creationSourceServerIdInput"></a>

```go
func CreationSourceServerIdInput() *string
```

- *Type:* *string

---

##### `GeoRedundantBackupEnabledInput`<sup>Optional</sup> <a name="GeoRedundantBackupEnabledInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.geoRedundantBackupEnabledInput"></a>

```go
func GeoRedundantBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RestorePointInTimeInput`<sup>Optional</sup> <a name="RestorePointInTimeInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.restorePointInTimeInput"></a>

```go
func RestorePointInTimeInput() *string
```

- *Type:* *string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `SslEnforcementEnabledInput`<sup>Optional</sup> <a name="SslEnforcementEnabledInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslEnforcementEnabledInput"></a>

```go
func SslEnforcementEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SslMinimalTlsVersionEnforcedInput`<sup>Optional</sup> <a name="SslMinimalTlsVersionEnforcedInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslMinimalTlsVersionEnforcedInput"></a>

```go
func SslMinimalTlsVersionEnforcedInput() *string
```

- *Type:* *string

---

##### `StorageMbInput`<sup>Optional</sup> <a name="StorageMbInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.storageMbInput"></a>

```go
func StorageMbInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLogin"></a>

```go
func AdministratorLogin() *string
```

- *Type:* *string

---

##### `AdministratorLoginPassword`<sup>Required</sup> <a name="AdministratorLoginPassword" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.administratorLoginPassword"></a>

```go
func AdministratorLoginPassword() *string
```

- *Type:* *string

---

##### `AutoGrowEnabled`<sup>Required</sup> <a name="AutoGrowEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.autoGrowEnabled"></a>

```go
func AutoGrowEnabled() interface{}
```

- *Type:* interface{}

---

##### `BackupRetentionDays`<sup>Required</sup> <a name="BackupRetentionDays" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.backupRetentionDays"></a>

```go
func BackupRetentionDays() *f64
```

- *Type:* *f64

---

##### `CreateMode`<sup>Required</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.createMode"></a>

```go
func CreateMode() *string
```

- *Type:* *string

---

##### `CreationSourceServerId`<sup>Required</sup> <a name="CreationSourceServerId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.creationSourceServerId"></a>

```go
func CreationSourceServerId() *string
```

- *Type:* *string

---

##### `GeoRedundantBackupEnabled`<sup>Required</sup> <a name="GeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.geoRedundantBackupEnabled"></a>

```go
func GeoRedundantBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RestorePointInTime`<sup>Required</sup> <a name="RestorePointInTime" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.restorePointInTime"></a>

```go
func RestorePointInTime() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `SslEnforcementEnabled`<sup>Required</sup> <a name="SslEnforcementEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslEnforcementEnabled"></a>

```go
func SslEnforcementEnabled() interface{}
```

- *Type:* interface{}

---

##### `SslMinimalTlsVersionEnforced`<sup>Required</sup> <a name="SslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.sslMinimalTlsVersionEnforced"></a>

```go
func SslMinimalTlsVersionEnforced() *string
```

- *Type:* *string

---

##### `StorageMb`<sup>Required</sup> <a name="StorageMb" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.storageMb"></a>

```go
func StorageMb() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mariadbServer.MariadbServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MariadbServerConfig <a name="MariadbServerConfig" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/mariadbserver"

&mariadbserver.MariadbServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SkuName: *string,
	SslEnforcementEnabled: interface{},
	Version: *string,
	AdministratorLogin: *string,
	AdministratorLoginPassword: *string,
	AutoGrowEnabled: interface{},
	BackupRetentionDays: *f64,
	CreateMode: *string,
	CreationSourceServerId: *string,
	GeoRedundantBackupEnabled: interface{},
	Id: *string,
	PublicNetworkAccessEnabled: interface{},
	RestorePointInTime: *string,
	SslMinimalTlsVersionEnforced: *string,
	StorageMb: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.mariadbServer.MariadbServerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#location MariadbServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#name MariadbServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#resource_group_name MariadbServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#sku_name MariadbServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.sslEnforcementEnabled">SslEnforcementEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#ssl_enforcement_enabled MariadbServer#ssl_enforcement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#version MariadbServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#administrator_login MariadbServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#administrator_login_password MariadbServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.autoGrowEnabled">AutoGrowEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#auto_grow_enabled MariadbServer#auto_grow_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.backupRetentionDays">BackupRetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#backup_retention_days MariadbServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.createMode">CreateMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#create_mode MariadbServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.creationSourceServerId">CreationSourceServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#creation_source_server_id MariadbServer#creation_source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.geoRedundantBackupEnabled">GeoRedundantBackupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#geo_redundant_backup_enabled MariadbServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#id MariadbServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#public_network_access_enabled MariadbServer#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.restorePointInTime">RestorePointInTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#restore_point_in_time MariadbServer#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.sslMinimalTlsVersionEnforced">SslMinimalTlsVersionEnforced</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#ssl_minimal_tls_version_enforced MariadbServer#ssl_minimal_tls_version_enforced}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.storageMb">StorageMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#storage_mb MariadbServer#storage_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#tags MariadbServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts">MariadbServerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#location MariadbServer#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#name MariadbServer#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#resource_group_name MariadbServer#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#sku_name MariadbServer#sku_name}.

---

##### `SslEnforcementEnabled`<sup>Required</sup> <a name="SslEnforcementEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.sslEnforcementEnabled"></a>

```go
SslEnforcementEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#ssl_enforcement_enabled MariadbServer#ssl_enforcement_enabled}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#version MariadbServer#version}.

---

##### `AdministratorLogin`<sup>Optional</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.administratorLogin"></a>

```go
AdministratorLogin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#administrator_login MariadbServer#administrator_login}.

---

##### `AdministratorLoginPassword`<sup>Optional</sup> <a name="AdministratorLoginPassword" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.administratorLoginPassword"></a>

```go
AdministratorLoginPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#administrator_login_password MariadbServer#administrator_login_password}.

---

##### `AutoGrowEnabled`<sup>Optional</sup> <a name="AutoGrowEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.autoGrowEnabled"></a>

```go
AutoGrowEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#auto_grow_enabled MariadbServer#auto_grow_enabled}.

---

##### `BackupRetentionDays`<sup>Optional</sup> <a name="BackupRetentionDays" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.backupRetentionDays"></a>

```go
BackupRetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#backup_retention_days MariadbServer#backup_retention_days}.

---

##### `CreateMode`<sup>Optional</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.createMode"></a>

```go
CreateMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#create_mode MariadbServer#create_mode}.

---

##### `CreationSourceServerId`<sup>Optional</sup> <a name="CreationSourceServerId" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.creationSourceServerId"></a>

```go
CreationSourceServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#creation_source_server_id MariadbServer#creation_source_server_id}.

---

##### `GeoRedundantBackupEnabled`<sup>Optional</sup> <a name="GeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.geoRedundantBackupEnabled"></a>

```go
GeoRedundantBackupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#geo_redundant_backup_enabled MariadbServer#geo_redundant_backup_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#id MariadbServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#public_network_access_enabled MariadbServer#public_network_access_enabled}.

---

##### `RestorePointInTime`<sup>Optional</sup> <a name="RestorePointInTime" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.restorePointInTime"></a>

```go
RestorePointInTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#restore_point_in_time MariadbServer#restore_point_in_time}.

---

##### `SslMinimalTlsVersionEnforced`<sup>Optional</sup> <a name="SslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.sslMinimalTlsVersionEnforced"></a>

```go
SslMinimalTlsVersionEnforced *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#ssl_minimal_tls_version_enforced MariadbServer#ssl_minimal_tls_version_enforced}.

---

##### `StorageMb`<sup>Optional</sup> <a name="StorageMb" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.storageMb"></a>

```go
StorageMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#storage_mb MariadbServer#storage_mb}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#tags MariadbServer#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerConfig.property.timeouts"></a>

```go
Timeouts MariadbServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts">MariadbServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#timeouts MariadbServer#timeouts}

---

### MariadbServerTimeouts <a name="MariadbServerTimeouts" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/mariadbserver"

&mariadbserver.MariadbServerTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#create MariadbServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#delete MariadbServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#read MariadbServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#update MariadbServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#create MariadbServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#delete MariadbServer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#read MariadbServer#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/mariadb_server#update MariadbServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MariadbServerTimeoutsOutputReference <a name="MariadbServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/mariadbserver"

mariadbserver.NewMariadbServerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MariadbServerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mariadbServer.MariadbServerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



