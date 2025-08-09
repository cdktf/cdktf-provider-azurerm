# `workloadsSapSingleNodeVirtualInstance` Submodule <a name="`workloadsSapSingleNodeVirtualInstance` Submodule" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkloadsSapSingleNodeVirtualInstance <a name="WorkloadsSapSingleNodeVirtualInstance" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance azurerm_workloads_sap_single_node_virtual_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstance(scope Construct, id *string, config WorkloadsSapSingleNodeVirtualInstanceConfig) WorkloadsSapSingleNodeVirtualInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig">WorkloadsSapSingleNodeVirtualInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig">WorkloadsSapSingleNodeVirtualInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putSingleServerConfiguration">PutSingleServerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetManagedResourceGroupName">ResetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetManagedResourcesNetworkAccessType">ResetManagedResourcesNetworkAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putIdentity"></a>

```go
func PutIdentity(value WorkloadsSapSingleNodeVirtualInstanceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

---

##### `PutSingleServerConfiguration` <a name="PutSingleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putSingleServerConfiguration"></a>

```go
func PutSingleServerConfiguration(value WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putSingleServerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putTimeouts"></a>

```go
func PutTimeouts(value WorkloadsSapSingleNodeVirtualInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetManagedResourceGroupName` <a name="ResetManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetManagedResourceGroupName"></a>

```go
func ResetManagedResourceGroupName()
```

##### `ResetManagedResourcesNetworkAccessType` <a name="ResetManagedResourcesNetworkAccessType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetManagedResourcesNetworkAccessType"></a>

```go
func ResetManagedResourcesNetworkAccessType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkloadsSapSingleNodeVirtualInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorkloadsSapSingleNodeVirtualInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkloadsSapSingleNodeVirtualInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkloadsSapSingleNodeVirtualInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorkloadsSapSingleNodeVirtualInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference">WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfiguration">SingleServerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference">WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocationInput">AppLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupNameInput">ManagedResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourcesNetworkAccessTypeInput">ManagedResourcesNetworkAccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdnInput">SapFqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProductInput">SapProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfigurationInput">SingleServerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocation">AppLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourcesNetworkAccessType">ManagedResourcesNetworkAccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdn">SapFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProduct">SapProduct</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identity"></a>

```go
func Identity() WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference">WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference</a>

---

##### `SingleServerConfiguration`<sup>Required</sup> <a name="SingleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfiguration"></a>

```go
func SingleServerConfiguration() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeouts"></a>

```go
func Timeouts() WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference">WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference</a>

---

##### `AppLocationInput`<sup>Optional</sup> <a name="AppLocationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocationInput"></a>

```go
func AppLocationInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identityInput"></a>

```go
func IdentityInput() WorkloadsSapSingleNodeVirtualInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedResourceGroupNameInput`<sup>Optional</sup> <a name="ManagedResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupNameInput"></a>

```go
func ManagedResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ManagedResourcesNetworkAccessTypeInput`<sup>Optional</sup> <a name="ManagedResourcesNetworkAccessTypeInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourcesNetworkAccessTypeInput"></a>

```go
func ManagedResourcesNetworkAccessTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SapFqdnInput`<sup>Optional</sup> <a name="SapFqdnInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdnInput"></a>

```go
func SapFqdnInput() *string
```

- *Type:* *string

---

##### `SapProductInput`<sup>Optional</sup> <a name="SapProductInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProductInput"></a>

```go
func SapProductInput() *string
```

- *Type:* *string

---

##### `SingleServerConfigurationInput`<sup>Optional</sup> <a name="SingleServerConfigurationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfigurationInput"></a>

```go
func SingleServerConfigurationInput() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AppLocation`<sup>Required</sup> <a name="AppLocation" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocation"></a>

```go
func AppLocation() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedResourceGroupName`<sup>Required</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupName"></a>

```go
func ManagedResourceGroupName() *string
```

- *Type:* *string

---

##### `ManagedResourcesNetworkAccessType`<sup>Required</sup> <a name="ManagedResourcesNetworkAccessType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourcesNetworkAccessType"></a>

```go
func ManagedResourcesNetworkAccessType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SapFqdn`<sup>Required</sup> <a name="SapFqdn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdn"></a>

```go
func SapFqdn() *string
```

- *Type:* *string

---

##### `SapProduct`<sup>Required</sup> <a name="SapProduct" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProduct"></a>

```go
func SapProduct() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadsSapSingleNodeVirtualInstanceConfig <a name="WorkloadsSapSingleNodeVirtualInstanceConfig" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

&workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppLocation: *string,
	Environment: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SapFqdn: *string,
	SapProduct: *string,
	SingleServerConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity,
	ManagedResourceGroupName: *string,
	ManagedResourcesNetworkAccessType: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.appLocation">AppLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#app_location WorkloadsSapSingleNodeVirtualInstance#app_location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.environment">Environment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#environment WorkloadsSapSingleNodeVirtualInstance#environment}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#location WorkloadsSapSingleNodeVirtualInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#name WorkloadsSapSingleNodeVirtualInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#resource_group_name WorkloadsSapSingleNodeVirtualInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapFqdn">SapFqdn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_fqdn WorkloadsSapSingleNodeVirtualInstance#sap_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapProduct">SapProduct</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_product WorkloadsSapSingleNodeVirtualInstance#sap_product}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.singleServerConfiguration">SingleServerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a></code> | single_server_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#id WorkloadsSapSingleNodeVirtualInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#managed_resource_group_name WorkloadsSapSingleNodeVirtualInstance#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.managedResourcesNetworkAccessType">ManagedResourcesNetworkAccessType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#managed_resources_network_access_type WorkloadsSapSingleNodeVirtualInstance#managed_resources_network_access_type}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#tags WorkloadsSapSingleNodeVirtualInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppLocation`<sup>Required</sup> <a name="AppLocation" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.appLocation"></a>

```go
AppLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#app_location WorkloadsSapSingleNodeVirtualInstance#app_location}.

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#environment WorkloadsSapSingleNodeVirtualInstance#environment}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#location WorkloadsSapSingleNodeVirtualInstance#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#name WorkloadsSapSingleNodeVirtualInstance#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#resource_group_name WorkloadsSapSingleNodeVirtualInstance#resource_group_name}.

---

##### `SapFqdn`<sup>Required</sup> <a name="SapFqdn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapFqdn"></a>

```go
SapFqdn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_fqdn WorkloadsSapSingleNodeVirtualInstance#sap_fqdn}.

---

##### `SapProduct`<sup>Required</sup> <a name="SapProduct" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapProduct"></a>

```go
SapProduct *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_product WorkloadsSapSingleNodeVirtualInstance#sap_product}.

---

##### `SingleServerConfiguration`<sup>Required</sup> <a name="SingleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.singleServerConfiguration"></a>

```go
SingleServerConfiguration WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

single_server_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#single_server_configuration WorkloadsSapSingleNodeVirtualInstance#single_server_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#id WorkloadsSapSingleNodeVirtualInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.identity"></a>

```go
Identity WorkloadsSapSingleNodeVirtualInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#identity WorkloadsSapSingleNodeVirtualInstance#identity}

---

##### `ManagedResourceGroupName`<sup>Optional</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.managedResourceGroupName"></a>

```go
ManagedResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#managed_resource_group_name WorkloadsSapSingleNodeVirtualInstance#managed_resource_group_name}.

---

##### `ManagedResourcesNetworkAccessType`<sup>Optional</sup> <a name="ManagedResourcesNetworkAccessType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.managedResourcesNetworkAccessType"></a>

```go
ManagedResourcesNetworkAccessType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#managed_resources_network_access_type WorkloadsSapSingleNodeVirtualInstance#managed_resources_network_access_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#tags WorkloadsSapSingleNodeVirtualInstance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.timeouts"></a>

```go
Timeouts WorkloadsSapSingleNodeVirtualInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#timeouts WorkloadsSapSingleNodeVirtualInstance#timeouts}

---

### WorkloadsSapSingleNodeVirtualInstanceIdentity <a name="WorkloadsSapSingleNodeVirtualInstanceIdentity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

&workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstanceIdentity {
	IdentityIds: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#identity_ids WorkloadsSapSingleNodeVirtualInstance#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#type WorkloadsSapSingleNodeVirtualInstance#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#identity_ids WorkloadsSapSingleNodeVirtualInstance#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#type WorkloadsSapSingleNodeVirtualInstance#type}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

&workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration {
	AppResourceGroupName: *string,
	SubnetId: *string,
	VirtualMachineConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration,
	DatabaseType: *string,
	DiskVolumeConfiguration: interface{},
	SecondaryIpEnabled: interface{},
	VirtualMachineResourceNames: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.appResourceGroupName">AppResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#app_resource_group_name WorkloadsSapSingleNodeVirtualInstance#app_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#subnet_id WorkloadsSapSingleNodeVirtualInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineConfiguration">VirtualMachineConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a></code> | virtual_machine_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.databaseType">DatabaseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#database_type WorkloadsSapSingleNodeVirtualInstance#database_type}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.diskVolumeConfiguration">DiskVolumeConfiguration</a></code> | <code>interface{}</code> | disk_volume_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.secondaryIpEnabled">SecondaryIpEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#secondary_ip_enabled WorkloadsSapSingleNodeVirtualInstance#secondary_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineResourceNames">VirtualMachineResourceNames</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a></code> | virtual_machine_resource_names block. |

---

##### `AppResourceGroupName`<sup>Required</sup> <a name="AppResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.appResourceGroupName"></a>

```go
AppResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#app_resource_group_name WorkloadsSapSingleNodeVirtualInstance#app_resource_group_name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#subnet_id WorkloadsSapSingleNodeVirtualInstance#subnet_id}.

---

##### `VirtualMachineConfiguration`<sup>Required</sup> <a name="VirtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineConfiguration"></a>

```go
VirtualMachineConfiguration WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

virtual_machine_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_configuration WorkloadsSapSingleNodeVirtualInstance#virtual_machine_configuration}

---

##### `DatabaseType`<sup>Optional</sup> <a name="DatabaseType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.databaseType"></a>

```go
DatabaseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#database_type WorkloadsSapSingleNodeVirtualInstance#database_type}.

---

##### `DiskVolumeConfiguration`<sup>Optional</sup> <a name="DiskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.diskVolumeConfiguration"></a>

```go
DiskVolumeConfiguration interface{}
```

- *Type:* interface{}

disk_volume_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#disk_volume_configuration WorkloadsSapSingleNodeVirtualInstance#disk_volume_configuration}

---

##### `SecondaryIpEnabled`<sup>Optional</sup> <a name="SecondaryIpEnabled" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.secondaryIpEnabled"></a>

```go
SecondaryIpEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#secondary_ip_enabled WorkloadsSapSingleNodeVirtualInstance#secondary_ip_enabled}.

---

##### `VirtualMachineResourceNames`<sup>Optional</sup> <a name="VirtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineResourceNames"></a>

```go
VirtualMachineResourceNames WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

virtual_machine_resource_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_resource_names WorkloadsSapSingleNodeVirtualInstance#virtual_machine_resource_names}

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

&workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration {
	NumberOfDisks: *f64,
	SizeInGb: *f64,
	SkuName: *string,
	VolumeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.numberOfDisks">NumberOfDisks</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#number_of_disks WorkloadsSapSingleNodeVirtualInstance#number_of_disks}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.sizeInGb">SizeInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#size_in_gb WorkloadsSapSingleNodeVirtualInstance#size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#sku_name WorkloadsSapSingleNodeVirtualInstance#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.volumeName">VolumeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}. |

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.numberOfDisks"></a>

```go
NumberOfDisks *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#number_of_disks WorkloadsSapSingleNodeVirtualInstance#number_of_disks}.

---

##### `SizeInGb`<sup>Required</sup> <a name="SizeInGb" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.sizeInGb"></a>

```go
SizeInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#size_in_gb WorkloadsSapSingleNodeVirtualInstance#size_in_gb}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#sku_name WorkloadsSapSingleNodeVirtualInstance#sku_name}.

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.volumeName"></a>

```go
VolumeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

&workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration {
	Image: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage,
	OsProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile,
	VirtualMachineSize: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.image">Image</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.osProfile">OsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a></code> | os_profile block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.virtualMachineSize">VirtualMachineSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_size WorkloadsSapSingleNodeVirtualInstance#virtual_machine_size}. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.image"></a>

```go
Image WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#image WorkloadsSapSingleNodeVirtualInstance#image}

---

##### `OsProfile`<sup>Required</sup> <a name="OsProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.osProfile"></a>

```go
OsProfile WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

os_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#os_profile WorkloadsSapSingleNodeVirtualInstance#os_profile}

---

##### `VirtualMachineSize`<sup>Required</sup> <a name="VirtualMachineSize" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.virtualMachineSize"></a>

```go
VirtualMachineSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_size WorkloadsSapSingleNodeVirtualInstance#virtual_machine_size}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

&workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage {
	Offer: *string,
	Publisher: *string,
	Sku: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.offer">Offer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#offer WorkloadsSapSingleNodeVirtualInstance#offer}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#publisher WorkloadsSapSingleNodeVirtualInstance#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#sku WorkloadsSapSingleNodeVirtualInstance#sku}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#version WorkloadsSapSingleNodeVirtualInstance#version}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.offer"></a>

```go
Offer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#offer WorkloadsSapSingleNodeVirtualInstance#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#publisher WorkloadsSapSingleNodeVirtualInstance#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#sku WorkloadsSapSingleNodeVirtualInstance#sku}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#version WorkloadsSapSingleNodeVirtualInstance#version}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

&workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile {
	AdminUsername: *string,
	SshPrivateKey: *string,
	SshPublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#admin_username WorkloadsSapSingleNodeVirtualInstance#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPrivateKey">SshPrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#ssh_private_key WorkloadsSapSingleNodeVirtualInstance#ssh_private_key}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#ssh_public_key WorkloadsSapSingleNodeVirtualInstance#ssh_public_key}. |

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.adminUsername"></a>

```go
AdminUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#admin_username WorkloadsSapSingleNodeVirtualInstance#admin_username}.

---

##### `SshPrivateKey`<sup>Required</sup> <a name="SshPrivateKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPrivateKey"></a>

```go
SshPrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#ssh_private_key WorkloadsSapSingleNodeVirtualInstance#ssh_private_key}.

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPublicKey"></a>

```go
SshPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#ssh_public_key WorkloadsSapSingleNodeVirtualInstance#ssh_public_key}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

&workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames {
	DataDisk: interface{},
	HostName: *string,
	NetworkInterfaceNames: *[]*string,
	OsDiskName: *string,
	VirtualMachineName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.dataDisk">DataDisk</a></code> | <code>interface{}</code> | data_disk block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#host_name WorkloadsSapSingleNodeVirtualInstance#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.networkInterfaceNames">NetworkInterfaceNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#network_interface_names WorkloadsSapSingleNodeVirtualInstance#network_interface_names}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.osDiskName">OsDiskName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#os_disk_name WorkloadsSapSingleNodeVirtualInstance#os_disk_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.virtualMachineName">VirtualMachineName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_name WorkloadsSapSingleNodeVirtualInstance#virtual_machine_name}. |

---

##### `DataDisk`<sup>Optional</sup> <a name="DataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.dataDisk"></a>

```go
DataDisk interface{}
```

- *Type:* interface{}

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#data_disk WorkloadsSapSingleNodeVirtualInstance#data_disk}

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#host_name WorkloadsSapSingleNodeVirtualInstance#host_name}.

---

##### `NetworkInterfaceNames`<sup>Optional</sup> <a name="NetworkInterfaceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.networkInterfaceNames"></a>

```go
NetworkInterfaceNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#network_interface_names WorkloadsSapSingleNodeVirtualInstance#network_interface_names}.

---

##### `OsDiskName`<sup>Optional</sup> <a name="OsDiskName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.osDiskName"></a>

```go
OsDiskName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#os_disk_name WorkloadsSapSingleNodeVirtualInstance#os_disk_name}.

---

##### `VirtualMachineName`<sup>Optional</sup> <a name="VirtualMachineName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.virtualMachineName"></a>

```go
VirtualMachineName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_name WorkloadsSapSingleNodeVirtualInstance#virtual_machine_name}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

&workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk {
	Names: *[]*string,
	VolumeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.names">Names</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#names WorkloadsSapSingleNodeVirtualInstance#names}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.volumeName">VolumeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}. |

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.names"></a>

```go
Names *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#names WorkloadsSapSingleNodeVirtualInstance#names}.

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.volumeName"></a>

```go
VolumeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}.

---

### WorkloadsSapSingleNodeVirtualInstanceTimeouts <a name="WorkloadsSapSingleNodeVirtualInstanceTimeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

&workloadssapsinglenodevirtualinstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#create WorkloadsSapSingleNodeVirtualInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#delete WorkloadsSapSingleNodeVirtualInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#read WorkloadsSapSingleNodeVirtualInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#update WorkloadsSapSingleNodeVirtualInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#create WorkloadsSapSingleNodeVirtualInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#delete WorkloadsSapSingleNodeVirtualInstance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#read WorkloadsSapSingleNodeVirtualInstance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/workloads_sap_single_node_virtual_instance#update WorkloadsSapSingleNodeVirtualInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadsSapSingleNodeVirtualInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.get"></a>

```go
func Get(index *f64) WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisksInput">NumberOfDisksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGbInput">SizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeNameInput">VolumeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisks">NumberOfDisks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGb">SizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeName">VolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberOfDisksInput`<sup>Optional</sup> <a name="NumberOfDisksInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisksInput"></a>

```go
func NumberOfDisksInput() *f64
```

- *Type:* *f64

---

##### `SizeInGbInput`<sup>Optional</sup> <a name="SizeInGbInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGbInput"></a>

```go
func SizeInGbInput() *f64
```

- *Type:* *f64

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeNameInput"></a>

```go
func VolumeNameInput() *string
```

- *Type:* *string

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisks"></a>

```go
func NumberOfDisks() *f64
```

- *Type:* *f64

---

##### `SizeInGb`<sup>Required</sup> <a name="SizeInGb" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGb"></a>

```go
func SizeInGb() *f64
```

- *Type:* *f64

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeName"></a>

```go
func VolumeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putDiskVolumeConfiguration">PutDiskVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineConfiguration">PutVirtualMachineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineResourceNames">PutVirtualMachineResourceNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDatabaseType">ResetDatabaseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDiskVolumeConfiguration">ResetDiskVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetSecondaryIpEnabled">ResetSecondaryIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetVirtualMachineResourceNames">ResetVirtualMachineResourceNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiskVolumeConfiguration` <a name="PutDiskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putDiskVolumeConfiguration"></a>

```go
func PutDiskVolumeConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putDiskVolumeConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVirtualMachineConfiguration` <a name="PutVirtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineConfiguration"></a>

```go
func PutVirtualMachineConfiguration(value WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

---

##### `PutVirtualMachineResourceNames` <a name="PutVirtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineResourceNames"></a>

```go
func PutVirtualMachineResourceNames(value WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineResourceNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

---

##### `ResetDatabaseType` <a name="ResetDatabaseType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDatabaseType"></a>

```go
func ResetDatabaseType()
```

##### `ResetDiskVolumeConfiguration` <a name="ResetDiskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDiskVolumeConfiguration"></a>

```go
func ResetDiskVolumeConfiguration()
```

##### `ResetSecondaryIpEnabled` <a name="ResetSecondaryIpEnabled" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetSecondaryIpEnabled"></a>

```go
func ResetSecondaryIpEnabled()
```

##### `ResetVirtualMachineResourceNames` <a name="ResetVirtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetVirtualMachineResourceNames"></a>

```go
func ResetVirtualMachineResourceNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfiguration">DiskVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfiguration">VirtualMachineConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNames">VirtualMachineResourceNames</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupNameInput">AppResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseTypeInput">DatabaseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfigurationInput">DiskVolumeConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabledInput">SecondaryIpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfigurationInput">VirtualMachineConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNamesInput">VirtualMachineResourceNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupName">AppResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabled">SecondaryIpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskVolumeConfiguration`<sup>Required</sup> <a name="DiskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfiguration"></a>

```go
func DiskVolumeConfiguration() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList</a>

---

##### `VirtualMachineConfiguration`<sup>Required</sup> <a name="VirtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfiguration"></a>

```go
func VirtualMachineConfiguration() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference</a>

---

##### `VirtualMachineResourceNames`<sup>Required</sup> <a name="VirtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNames"></a>

```go
func VirtualMachineResourceNames() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference</a>

---

##### `AppResourceGroupNameInput`<sup>Optional</sup> <a name="AppResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupNameInput"></a>

```go
func AppResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `DatabaseTypeInput`<sup>Optional</sup> <a name="DatabaseTypeInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseTypeInput"></a>

```go
func DatabaseTypeInput() *string
```

- *Type:* *string

---

##### `DiskVolumeConfigurationInput`<sup>Optional</sup> <a name="DiskVolumeConfigurationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfigurationInput"></a>

```go
func DiskVolumeConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SecondaryIpEnabledInput`<sup>Optional</sup> <a name="SecondaryIpEnabledInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabledInput"></a>

```go
func SecondaryIpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `VirtualMachineConfigurationInput`<sup>Optional</sup> <a name="VirtualMachineConfigurationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfigurationInput"></a>

```go
func VirtualMachineConfigurationInput() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

---

##### `VirtualMachineResourceNamesInput`<sup>Optional</sup> <a name="VirtualMachineResourceNamesInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNamesInput"></a>

```go
func VirtualMachineResourceNamesInput() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

---

##### `AppResourceGroupName`<sup>Required</sup> <a name="AppResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupName"></a>

```go
func AppResourceGroupName() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `SecondaryIpEnabled`<sup>Required</sup> <a name="SecondaryIpEnabled" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabled"></a>

```go
func SecondaryIpEnabled() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offerInput">OfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offerInput"></a>

```go
func OfferInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKeyInput">SshPrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKey">SshPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsernameInput"></a>

```go
func AdminUsernameInput() *string
```

- *Type:* *string

---

##### `SshPrivateKeyInput`<sup>Optional</sup> <a name="SshPrivateKeyInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKeyInput"></a>

```go
func SshPrivateKeyInput() *string
```

- *Type:* *string

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKeyInput"></a>

```go
func SshPublicKeyInput() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `SshPrivateKey`<sup>Required</sup> <a name="SshPrivateKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKey"></a>

```go
func SshPrivateKey() *string
```

- *Type:* *string

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKey"></a>

```go
func SshPublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putOsProfile">PutOsProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImage` <a name="PutImage" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putImage"></a>

```go
func PutImage(value WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

---

##### `PutOsProfile` <a name="PutOsProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putOsProfile"></a>

```go
func PutOsProfile(value WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putOsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.image">Image</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfile">OsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfileInput">OsProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSizeInput">VirtualMachineSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSize">VirtualMachineSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.image"></a>

```go
func Image() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference</a>

---

##### `OsProfile`<sup>Required</sup> <a name="OsProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfile"></a>

```go
func OsProfile() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.imageInput"></a>

```go
func ImageInput() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

---

##### `OsProfileInput`<sup>Optional</sup> <a name="OsProfileInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfileInput"></a>

```go
func OsProfileInput() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

---

##### `VirtualMachineSizeInput`<sup>Optional</sup> <a name="VirtualMachineSizeInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSizeInput"></a>

```go
func VirtualMachineSizeInput() *string
```

- *Type:* *string

---

##### `VirtualMachineSize`<sup>Required</sup> <a name="VirtualMachineSize" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSize"></a>

```go
func VirtualMachineSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.get"></a>

```go
func Get(index *f64) WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.namesInput">NamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeNameInput">VolumeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.names">Names</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeName">VolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamesInput`<sup>Optional</sup> <a name="NamesInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.namesInput"></a>

```go
func NamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeNameInput"></a>

```go
func VolumeNameInput() *string
```

- *Type:* *string

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.names"></a>

```go
func Names() *[]*string
```

- *Type:* *[]*string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeName"></a>

```go
func VolumeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.putDataDisk">PutDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetDataDisk">ResetDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetNetworkInterfaceNames">ResetNetworkInterfaceNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetOsDiskName">ResetOsDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetVirtualMachineName">ResetVirtualMachineName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataDisk` <a name="PutDataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.putDataDisk"></a>

```go
func PutDataDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.putDataDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataDisk` <a name="ResetDataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetDataDisk"></a>

```go
func ResetDataDisk()
```

##### `ResetHostName` <a name="ResetHostName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetHostName"></a>

```go
func ResetHostName()
```

##### `ResetNetworkInterfaceNames` <a name="ResetNetworkInterfaceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetNetworkInterfaceNames"></a>

```go
func ResetNetworkInterfaceNames()
```

##### `ResetOsDiskName` <a name="ResetOsDiskName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetOsDiskName"></a>

```go
func ResetOsDiskName()
```

##### `ResetVirtualMachineName` <a name="ResetVirtualMachineName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetVirtualMachineName"></a>

```go
func ResetVirtualMachineName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDisk">DataDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDiskInput">DataDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNamesInput">NetworkInterfaceNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskNameInput">OsDiskNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineNameInput">VirtualMachineNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNames">NetworkInterfaceNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskName">OsDiskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineName">VirtualMachineName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDisk"></a>

```go
func DataDisk() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList</a>

---

##### `DataDiskInput`<sup>Optional</sup> <a name="DataDiskInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDiskInput"></a>

```go
func DataDiskInput() interface{}
```

- *Type:* interface{}

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceNamesInput`<sup>Optional</sup> <a name="NetworkInterfaceNamesInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNamesInput"></a>

```go
func NetworkInterfaceNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OsDiskNameInput`<sup>Optional</sup> <a name="OsDiskNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskNameInput"></a>

```go
func OsDiskNameInput() *string
```

- *Type:* *string

---

##### `VirtualMachineNameInput`<sup>Optional</sup> <a name="VirtualMachineNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineNameInput"></a>

```go
func VirtualMachineNameInput() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `NetworkInterfaceNames`<sup>Required</sup> <a name="NetworkInterfaceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNames"></a>

```go
func NetworkInterfaceNames() *[]*string
```

- *Type:* *[]*string

---

##### `OsDiskName`<sup>Required</sup> <a name="OsDiskName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskName"></a>

```go
func OsDiskName() *string
```

- *Type:* *string

---

##### `VirtualMachineName`<sup>Required</sup> <a name="VirtualMachineName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineName"></a>

```go
func VirtualMachineName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

---


### WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/workloadssapsinglenodevirtualinstance"

workloadssapsinglenodevirtualinstance.NewWorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



