# `containerConnectedRegistry` Submodule <a name="`containerConnectedRegistry` Submodule" id="@cdktf/provider-azurerm.containerConnectedRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerConnectedRegistry <a name="ContainerConnectedRegistry" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry azurerm_container_connected_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerconnectedregistry"

containerconnectedregistry.NewContainerConnectedRegistry(scope Construct, id *string, config ContainerConnectedRegistryConfig) ContainerConnectedRegistry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig">ContainerConnectedRegistryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig">ContainerConnectedRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetAuditLogEnabled">ResetAuditLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetClientTokenIds">ResetClientTokenIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetParentRegistryId">ResetParentRegistryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncMessageTtl">ResetSyncMessageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncSchedule">ResetSyncSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncWindow">ResetSyncWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putNotification"></a>

```go
func PutNotification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putNotification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts"></a>

```go
func PutTimeouts(value ContainerConnectedRegistryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a>

---

##### `ResetAuditLogEnabled` <a name="ResetAuditLogEnabled" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetAuditLogEnabled"></a>

```go
func ResetAuditLogEnabled()
```

##### `ResetClientTokenIds` <a name="ResetClientTokenIds" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetClientTokenIds"></a>

```go
func ResetClientTokenIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetId"></a>

```go
func ResetId()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetMode"></a>

```go
func ResetMode()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetNotification"></a>

```go
func ResetNotification()
```

##### `ResetParentRegistryId` <a name="ResetParentRegistryId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetParentRegistryId"></a>

```go
func ResetParentRegistryId()
```

##### `ResetSyncMessageTtl` <a name="ResetSyncMessageTtl" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncMessageTtl"></a>

```go
func ResetSyncMessageTtl()
```

##### `ResetSyncSchedule` <a name="ResetSyncSchedule" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncSchedule"></a>

```go
func ResetSyncSchedule()
```

##### `ResetSyncWindow` <a name="ResetSyncWindow" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncWindow"></a>

```go
func ResetSyncWindow()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerConnectedRegistry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerconnectedregistry"

containerconnectedregistry.ContainerConnectedRegistry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerconnectedregistry"

containerconnectedregistry.ContainerConnectedRegistry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerconnectedregistry"

containerconnectedregistry.ContainerConnectedRegistry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerconnectedregistry"

containerconnectedregistry.ContainerConnectedRegistry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerConnectedRegistry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerConnectedRegistry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerConnectedRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerConnectedRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList">ContainerConnectedRegistryNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference">ContainerConnectedRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabledInput">AuditLogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIdsInput">ClientTokenIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryIdInput">ContainerRegistryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notificationInput">NotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryIdInput">ParentRegistryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtlInput">SyncMessageTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncScheduleInput">SyncScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenIdInput">SyncTokenIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindowInput">SyncWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabled">AuditLogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIds">ClientTokenIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryId">ContainerRegistryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryId">ParentRegistryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtl">SyncMessageTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncSchedule">SyncSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenId">SyncTokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindow">SyncWindow</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notification"></a>

```go
func Notification() ContainerConnectedRegistryNotificationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList">ContainerConnectedRegistryNotificationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeouts"></a>

```go
func Timeouts() ContainerConnectedRegistryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference">ContainerConnectedRegistryTimeoutsOutputReference</a>

---

##### `AuditLogEnabledInput`<sup>Optional</sup> <a name="AuditLogEnabledInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabledInput"></a>

```go
func AuditLogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ClientTokenIdsInput`<sup>Optional</sup> <a name="ClientTokenIdsInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIdsInput"></a>

```go
func ClientTokenIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerRegistryIdInput`<sup>Optional</sup> <a name="ContainerRegistryIdInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryIdInput"></a>

```go
func ContainerRegistryIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notificationInput"></a>

```go
func NotificationInput() interface{}
```

- *Type:* interface{}

---

##### `ParentRegistryIdInput`<sup>Optional</sup> <a name="ParentRegistryIdInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryIdInput"></a>

```go
func ParentRegistryIdInput() *string
```

- *Type:* *string

---

##### `SyncMessageTtlInput`<sup>Optional</sup> <a name="SyncMessageTtlInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtlInput"></a>

```go
func SyncMessageTtlInput() *string
```

- *Type:* *string

---

##### `SyncScheduleInput`<sup>Optional</sup> <a name="SyncScheduleInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncScheduleInput"></a>

```go
func SyncScheduleInput() *string
```

- *Type:* *string

---

##### `SyncTokenIdInput`<sup>Optional</sup> <a name="SyncTokenIdInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenIdInput"></a>

```go
func SyncTokenIdInput() *string
```

- *Type:* *string

---

##### `SyncWindowInput`<sup>Optional</sup> <a name="SyncWindowInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindowInput"></a>

```go
func SyncWindowInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuditLogEnabled`<sup>Required</sup> <a name="AuditLogEnabled" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabled"></a>

```go
func AuditLogEnabled() interface{}
```

- *Type:* interface{}

---

##### `ClientTokenIds`<sup>Required</sup> <a name="ClientTokenIds" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIds"></a>

```go
func ClientTokenIds() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryId"></a>

```go
func ContainerRegistryId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentRegistryId`<sup>Required</sup> <a name="ParentRegistryId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryId"></a>

```go
func ParentRegistryId() *string
```

- *Type:* *string

---

##### `SyncMessageTtl`<sup>Required</sup> <a name="SyncMessageTtl" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtl"></a>

```go
func SyncMessageTtl() *string
```

- *Type:* *string

---

##### `SyncSchedule`<sup>Required</sup> <a name="SyncSchedule" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncSchedule"></a>

```go
func SyncSchedule() *string
```

- *Type:* *string

---

##### `SyncTokenId`<sup>Required</sup> <a name="SyncTokenId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenId"></a>

```go
func SyncTokenId() *string
```

- *Type:* *string

---

##### `SyncWindow`<sup>Required</sup> <a name="SyncWindow" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindow"></a>

```go
func SyncWindow() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerConnectedRegistryConfig <a name="ContainerConnectedRegistryConfig" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerconnectedregistry"

&containerconnectedregistry.ContainerConnectedRegistryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerRegistryId: *string,
	Name: *string,
	SyncTokenId: *string,
	AuditLogEnabled: interface{},
	ClientTokenIds: *[]*string,
	Id: *string,
	LogLevel: *string,
	Mode: *string,
	Notification: interface{},
	ParentRegistryId: *string,
	SyncMessageTtl: *string,
	SyncSchedule: *string,
	SyncWindow: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.containerRegistryId">ContainerRegistryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#container_registry_id ContainerConnectedRegistry#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncTokenId">SyncTokenId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#sync_token_id ContainerConnectedRegistry#sync_token_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.auditLogEnabled">AuditLogEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#audit_log_enabled ContainerConnectedRegistry#audit_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.clientTokenIds">ClientTokenIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#client_token_ids ContainerConnectedRegistry#client_token_ids}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#id ContainerConnectedRegistry#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#log_level ContainerConnectedRegistry#log_level}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#mode ContainerConnectedRegistry#mode}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.notification">Notification</a></code> | <code>interface{}</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.parentRegistryId">ParentRegistryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#parent_registry_id ContainerConnectedRegistry#parent_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncMessageTtl">SyncMessageTtl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#sync_message_ttl ContainerConnectedRegistry#sync_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncSchedule">SyncSchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#sync_schedule ContainerConnectedRegistry#sync_schedule}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncWindow">SyncWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#sync_window ContainerConnectedRegistry#sync_window}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.containerRegistryId"></a>

```go
ContainerRegistryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#container_registry_id ContainerConnectedRegistry#container_registry_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}.

---

##### `SyncTokenId`<sup>Required</sup> <a name="SyncTokenId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncTokenId"></a>

```go
SyncTokenId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#sync_token_id ContainerConnectedRegistry#sync_token_id}.

---

##### `AuditLogEnabled`<sup>Optional</sup> <a name="AuditLogEnabled" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.auditLogEnabled"></a>

```go
AuditLogEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#audit_log_enabled ContainerConnectedRegistry#audit_log_enabled}.

---

##### `ClientTokenIds`<sup>Optional</sup> <a name="ClientTokenIds" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.clientTokenIds"></a>

```go
ClientTokenIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#client_token_ids ContainerConnectedRegistry#client_token_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#id ContainerConnectedRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#log_level ContainerConnectedRegistry#log_level}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#mode ContainerConnectedRegistry#mode}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.notification"></a>

```go
Notification interface{}
```

- *Type:* interface{}

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#notification ContainerConnectedRegistry#notification}

---

##### `ParentRegistryId`<sup>Optional</sup> <a name="ParentRegistryId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.parentRegistryId"></a>

```go
ParentRegistryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#parent_registry_id ContainerConnectedRegistry#parent_registry_id}.

---

##### `SyncMessageTtl`<sup>Optional</sup> <a name="SyncMessageTtl" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncMessageTtl"></a>

```go
SyncMessageTtl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#sync_message_ttl ContainerConnectedRegistry#sync_message_ttl}.

---

##### `SyncSchedule`<sup>Optional</sup> <a name="SyncSchedule" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncSchedule"></a>

```go
SyncSchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#sync_schedule ContainerConnectedRegistry#sync_schedule}.

---

##### `SyncWindow`<sup>Optional</sup> <a name="SyncWindow" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncWindow"></a>

```go
SyncWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#sync_window ContainerConnectedRegistry#sync_window}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.timeouts"></a>

```go
Timeouts ContainerConnectedRegistryTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#timeouts ContainerConnectedRegistry#timeouts}

---

### ContainerConnectedRegistryNotification <a name="ContainerConnectedRegistryNotification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerconnectedregistry"

&containerconnectedregistry.ContainerConnectedRegistryNotification {
	Action: *string,
	Name: *string,
	Digest: *string,
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#action ContainerConnectedRegistry#action}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.digest">Digest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#digest ContainerConnectedRegistry#digest}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.tag">Tag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#tag ContainerConnectedRegistry#tag}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#action ContainerConnectedRegistry#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}.

---

##### `Digest`<sup>Optional</sup> <a name="Digest" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.digest"></a>

```go
Digest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#digest ContainerConnectedRegistry#digest}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#tag ContainerConnectedRegistry#tag}.

---

### ContainerConnectedRegistryTimeouts <a name="ContainerConnectedRegistryTimeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerconnectedregistry"

&containerconnectedregistry.ContainerConnectedRegistryTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#create ContainerConnectedRegistry#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#delete ContainerConnectedRegistry#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#read ContainerConnectedRegistry#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#update ContainerConnectedRegistry#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#create ContainerConnectedRegistry#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#delete ContainerConnectedRegistry#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#read ContainerConnectedRegistry#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/container_connected_registry#update ContainerConnectedRegistry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerConnectedRegistryNotificationList <a name="ContainerConnectedRegistryNotificationList" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerconnectedregistry"

containerconnectedregistry.NewContainerConnectedRegistryNotificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerConnectedRegistryNotificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.get"></a>

```go
func Get(index *f64) ContainerConnectedRegistryNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerConnectedRegistryNotificationOutputReference <a name="ContainerConnectedRegistryNotificationOutputReference" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerconnectedregistry"

containerconnectedregistry.NewContainerConnectedRegistryNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerConnectedRegistryNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetDigest">ResetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDigest` <a name="ResetDigest" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetDigest"></a>

```go
func ResetDigest()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digestInput">DigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digestInput"></a>

```go
func DigestInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerConnectedRegistryTimeoutsOutputReference <a name="ContainerConnectedRegistryTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerconnectedregistry"

containerconnectedregistry.NewContainerConnectedRegistryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerConnectedRegistryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



