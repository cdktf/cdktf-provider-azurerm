# `workloadsSapDiscoveryVirtualInstance` Submodule <a name="`workloadsSapDiscoveryVirtualInstance` Submodule" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkloadsSapDiscoveryVirtualInstance <a name="WorkloadsSapDiscoveryVirtualInstance" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance azurerm_workloads_sap_discovery_virtual_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/workloadssapdiscoveryvirtualinstance"

workloadssapdiscoveryvirtualinstance.NewWorkloadsSapDiscoveryVirtualInstance(scope Construct, id *string, config WorkloadsSapDiscoveryVirtualInstanceConfig) WorkloadsSapDiscoveryVirtualInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig">WorkloadsSapDiscoveryVirtualInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig">WorkloadsSapDiscoveryVirtualInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedResourceGroupName">ResetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedStorageAccountName">ResetManagedStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity"></a>

```go
func PutIdentity(value WorkloadsSapDiscoveryVirtualInstanceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts"></a>

```go
func PutTimeouts(value WorkloadsSapDiscoveryVirtualInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetManagedResourceGroupName` <a name="ResetManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedResourceGroupName"></a>

```go
func ResetManagedResourceGroupName()
```

##### `ResetManagedStorageAccountName` <a name="ResetManagedStorageAccountName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedStorageAccountName"></a>

```go
func ResetManagedStorageAccountName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkloadsSapDiscoveryVirtualInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/workloadssapdiscoveryvirtualinstance"

workloadssapdiscoveryvirtualinstance.WorkloadsSapDiscoveryVirtualInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/workloadssapdiscoveryvirtualinstance"

workloadssapdiscoveryvirtualinstance.WorkloadsSapDiscoveryVirtualInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/workloadssapdiscoveryvirtualinstance"

workloadssapdiscoveryvirtualinstance.WorkloadsSapDiscoveryVirtualInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/workloadssapdiscoveryvirtualinstance"

workloadssapdiscoveryvirtualinstance.WorkloadsSapDiscoveryVirtualInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorkloadsSapDiscoveryVirtualInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkloadsSapDiscoveryVirtualInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkloadsSapDiscoveryVirtualInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorkloadsSapDiscoveryVirtualInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference">WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference">WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineIdInput">CentralServerVirtualMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupNameInput">ManagedResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountNameInput">ManagedStorageAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProductInput">SapProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineId">CentralServerVirtualMachineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountName">ManagedStorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProduct">SapProduct</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identity"></a>

```go
func Identity() WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference">WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeouts"></a>

```go
func Timeouts() WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference">WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference</a>

---

##### `CentralServerVirtualMachineIdInput`<sup>Optional</sup> <a name="CentralServerVirtualMachineIdInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineIdInput"></a>

```go
func CentralServerVirtualMachineIdInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identityInput"></a>

```go
func IdentityInput() WorkloadsSapDiscoveryVirtualInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedResourceGroupNameInput`<sup>Optional</sup> <a name="ManagedResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupNameInput"></a>

```go
func ManagedResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ManagedStorageAccountNameInput`<sup>Optional</sup> <a name="ManagedStorageAccountNameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountNameInput"></a>

```go
func ManagedStorageAccountNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SapProductInput`<sup>Optional</sup> <a name="SapProductInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProductInput"></a>

```go
func SapProductInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CentralServerVirtualMachineId`<sup>Required</sup> <a name="CentralServerVirtualMachineId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineId"></a>

```go
func CentralServerVirtualMachineId() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedResourceGroupName`<sup>Required</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupName"></a>

```go
func ManagedResourceGroupName() *string
```

- *Type:* *string

---

##### `ManagedStorageAccountName`<sup>Required</sup> <a name="ManagedStorageAccountName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountName"></a>

```go
func ManagedStorageAccountName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SapProduct`<sup>Required</sup> <a name="SapProduct" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProduct"></a>

```go
func SapProduct() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadsSapDiscoveryVirtualInstanceConfig <a name="WorkloadsSapDiscoveryVirtualInstanceConfig" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/workloadssapdiscoveryvirtualinstance"

&workloadssapdiscoveryvirtualinstance.WorkloadsSapDiscoveryVirtualInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CentralServerVirtualMachineId: *string,
	Environment: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SapProduct: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity,
	ManagedResourceGroupName: *string,
	ManagedStorageAccountName: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.centralServerVirtualMachineId">CentralServerVirtualMachineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#central_server_virtual_machine_id WorkloadsSapDiscoveryVirtualInstance#central_server_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.environment">Environment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#environment WorkloadsSapDiscoveryVirtualInstance#environment}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#location WorkloadsSapDiscoveryVirtualInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#name WorkloadsSapDiscoveryVirtualInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#resource_group_name WorkloadsSapDiscoveryVirtualInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.sapProduct">SapProduct</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#sap_product WorkloadsSapDiscoveryVirtualInstance#sap_product}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#id WorkloadsSapDiscoveryVirtualInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resource_group_name WorkloadsSapDiscoveryVirtualInstance#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedStorageAccountName">ManagedStorageAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_storage_account_name WorkloadsSapDiscoveryVirtualInstance#managed_storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#tags WorkloadsSapDiscoveryVirtualInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CentralServerVirtualMachineId`<sup>Required</sup> <a name="CentralServerVirtualMachineId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.centralServerVirtualMachineId"></a>

```go
CentralServerVirtualMachineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#central_server_virtual_machine_id WorkloadsSapDiscoveryVirtualInstance#central_server_virtual_machine_id}.

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#environment WorkloadsSapDiscoveryVirtualInstance#environment}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#location WorkloadsSapDiscoveryVirtualInstance#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#name WorkloadsSapDiscoveryVirtualInstance#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#resource_group_name WorkloadsSapDiscoveryVirtualInstance#resource_group_name}.

---

##### `SapProduct`<sup>Required</sup> <a name="SapProduct" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.sapProduct"></a>

```go
SapProduct *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#sap_product WorkloadsSapDiscoveryVirtualInstance#sap_product}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#id WorkloadsSapDiscoveryVirtualInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.identity"></a>

```go
Identity WorkloadsSapDiscoveryVirtualInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#identity WorkloadsSapDiscoveryVirtualInstance#identity}

---

##### `ManagedResourceGroupName`<sup>Optional</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedResourceGroupName"></a>

```go
ManagedResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resource_group_name WorkloadsSapDiscoveryVirtualInstance#managed_resource_group_name}.

---

##### `ManagedStorageAccountName`<sup>Optional</sup> <a name="ManagedStorageAccountName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedStorageAccountName"></a>

```go
ManagedStorageAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_storage_account_name WorkloadsSapDiscoveryVirtualInstance#managed_storage_account_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#tags WorkloadsSapDiscoveryVirtualInstance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.timeouts"></a>

```go
Timeouts WorkloadsSapDiscoveryVirtualInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#timeouts WorkloadsSapDiscoveryVirtualInstance#timeouts}

---

### WorkloadsSapDiscoveryVirtualInstanceIdentity <a name="WorkloadsSapDiscoveryVirtualInstanceIdentity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/workloadssapdiscoveryvirtualinstance"

&workloadssapdiscoveryvirtualinstance.WorkloadsSapDiscoveryVirtualInstanceIdentity {
	IdentityIds: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#identity_ids WorkloadsSapDiscoveryVirtualInstance#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#type WorkloadsSapDiscoveryVirtualInstance#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#identity_ids WorkloadsSapDiscoveryVirtualInstance#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#type WorkloadsSapDiscoveryVirtualInstance#type}.

---

### WorkloadsSapDiscoveryVirtualInstanceTimeouts <a name="WorkloadsSapDiscoveryVirtualInstanceTimeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/workloadssapdiscoveryvirtualinstance"

&workloadssapdiscoveryvirtualinstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#create WorkloadsSapDiscoveryVirtualInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#delete WorkloadsSapDiscoveryVirtualInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#read WorkloadsSapDiscoveryVirtualInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#update WorkloadsSapDiscoveryVirtualInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#create WorkloadsSapDiscoveryVirtualInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#delete WorkloadsSapDiscoveryVirtualInstance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#read WorkloadsSapDiscoveryVirtualInstance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/workloads_sap_discovery_virtual_instance#update WorkloadsSapDiscoveryVirtualInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference <a name="WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/workloadssapdiscoveryvirtualinstance"

workloadssapdiscoveryvirtualinstance.NewWorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadsSapDiscoveryVirtualInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

---


### WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference <a name="WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/workloadssapdiscoveryvirtualinstance"

workloadssapdiscoveryvirtualinstance.NewWorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



