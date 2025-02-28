# `resourceDeploymentScriptAzurePowerShell` Submodule <a name="`resourceDeploymentScriptAzurePowerShell` Submodule" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceDeploymentScriptAzurePowerShell <a name="ResourceDeploymentScriptAzurePowerShell" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell azurerm_resource_deployment_script_azure_power_shell}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

resourcedeploymentscriptazurepowershell.NewResourceDeploymentScriptAzurePowerShell(scope Construct, id *string, config ResourceDeploymentScriptAzurePowerShellConfig) ResourceDeploymentScriptAzurePowerShell
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig">ResourceDeploymentScriptAzurePowerShellConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig">ResourceDeploymentScriptAzurePowerShellConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putEnvironmentVariable">PutEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putStorageAccount">PutStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetCleanupPreference">ResetCleanupPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetCommandLine">ResetCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetEnvironmentVariable">ResetEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetForceUpdateTag">ResetForceUpdateTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetPrimaryScriptUri">ResetPrimaryScriptUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetScriptContent">ResetScriptContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetStorageAccount">ResetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetSupportingScriptUris">ResetSupportingScriptUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putContainer"></a>

```go
func PutContainer(value ResourceDeploymentScriptAzurePowerShellContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a>

---

##### `PutEnvironmentVariable` <a name="PutEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putEnvironmentVariable"></a>

```go
func PutEnvironmentVariable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putEnvironmentVariable.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putIdentity"></a>

```go
func PutIdentity(value ResourceDeploymentScriptAzurePowerShellIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a>

---

##### `PutStorageAccount` <a name="PutStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putStorageAccount"></a>

```go
func PutStorageAccount(value ResourceDeploymentScriptAzurePowerShellStorageAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putStorageAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putTimeouts"></a>

```go
func PutTimeouts(value ResourceDeploymentScriptAzurePowerShellTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a>

---

##### `ResetCleanupPreference` <a name="ResetCleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetCleanupPreference"></a>

```go
func ResetCleanupPreference()
```

##### `ResetCommandLine` <a name="ResetCommandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetCommandLine"></a>

```go
func ResetCommandLine()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetEnvironmentVariable` <a name="ResetEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetEnvironmentVariable"></a>

```go
func ResetEnvironmentVariable()
```

##### `ResetForceUpdateTag` <a name="ResetForceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetForceUpdateTag"></a>

```go
func ResetForceUpdateTag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetPrimaryScriptUri` <a name="ResetPrimaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetPrimaryScriptUri"></a>

```go
func ResetPrimaryScriptUri()
```

##### `ResetScriptContent` <a name="ResetScriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetScriptContent"></a>

```go
func ResetScriptContent()
```

##### `ResetStorageAccount` <a name="ResetStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetStorageAccount"></a>

```go
func ResetStorageAccount()
```

##### `ResetSupportingScriptUris` <a name="ResetSupportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetSupportingScriptUris"></a>

```go
func ResetSupportingScriptUris()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceDeploymentScriptAzurePowerShell resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

resourcedeploymentscriptazurepowershell.ResourceDeploymentScriptAzurePowerShell_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

resourcedeploymentscriptazurepowershell.ResourceDeploymentScriptAzurePowerShell_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

resourcedeploymentscriptazurepowershell.ResourceDeploymentScriptAzurePowerShell_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

resourcedeploymentscriptazurepowershell.ResourceDeploymentScriptAzurePowerShell_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ResourceDeploymentScriptAzurePowerShell resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourceDeploymentScriptAzurePowerShell to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourceDeploymentScriptAzurePowerShell that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ResourceDeploymentScriptAzurePowerShell to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.container">Container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference">ResourceDeploymentScriptAzurePowerShellContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.environmentVariable">EnvironmentVariable</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList">ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference">ResourceDeploymentScriptAzurePowerShellIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.outputs">Outputs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference">ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference">ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cleanupPreferenceInput">CleanupPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.commandLineInput">CommandLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.environmentVariableInput">EnvironmentVariableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forceUpdateTagInput">ForceUpdateTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.primaryScriptUriInput">PrimaryScriptUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.retentionIntervalInput">RetentionIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.scriptContentInput">ScriptContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.storageAccountInput">StorageAccountInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.supportingScriptUrisInput">SupportingScriptUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cleanupPreference">CleanupPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.commandLine">CommandLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.primaryScriptUri">PrimaryScriptUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.retentionInterval">RetentionInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.scriptContent">ScriptContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.supportingScriptUris">SupportingScriptUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.container"></a>

```go
func Container() ResourceDeploymentScriptAzurePowerShellContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference">ResourceDeploymentScriptAzurePowerShellContainerOutputReference</a>

---

##### `EnvironmentVariable`<sup>Required</sup> <a name="EnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.environmentVariable"></a>

```go
func EnvironmentVariable() ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList">ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.identity"></a>

```go
func Identity() ResourceDeploymentScriptAzurePowerShellIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference">ResourceDeploymentScriptAzurePowerShellIdentityOutputReference</a>

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.outputs"></a>

```go
func Outputs() *string
```

- *Type:* *string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.storageAccount"></a>

```go
func StorageAccount() ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference">ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeouts"></a>

```go
func Timeouts() ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference">ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference</a>

---

##### `CleanupPreferenceInput`<sup>Optional</sup> <a name="CleanupPreferenceInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cleanupPreferenceInput"></a>

```go
func CleanupPreferenceInput() *string
```

- *Type:* *string

---

##### `CommandLineInput`<sup>Optional</sup> <a name="CommandLineInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.commandLineInput"></a>

```go
func CommandLineInput() *string
```

- *Type:* *string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.containerInput"></a>

```go
func ContainerInput() ResourceDeploymentScriptAzurePowerShellContainer
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a>

---

##### `EnvironmentVariableInput`<sup>Optional</sup> <a name="EnvironmentVariableInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.environmentVariableInput"></a>

```go
func EnvironmentVariableInput() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdateTagInput`<sup>Optional</sup> <a name="ForceUpdateTagInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forceUpdateTagInput"></a>

```go
func ForceUpdateTagInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.identityInput"></a>

```go
func IdentityInput() ResourceDeploymentScriptAzurePowerShellIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryScriptUriInput`<sup>Optional</sup> <a name="PrimaryScriptUriInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.primaryScriptUriInput"></a>

```go
func PrimaryScriptUriInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RetentionIntervalInput`<sup>Optional</sup> <a name="RetentionIntervalInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.retentionIntervalInput"></a>

```go
func RetentionIntervalInput() *string
```

- *Type:* *string

---

##### `ScriptContentInput`<sup>Optional</sup> <a name="ScriptContentInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.scriptContentInput"></a>

```go
func ScriptContentInput() *string
```

- *Type:* *string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.storageAccountInput"></a>

```go
func StorageAccountInput() ResourceDeploymentScriptAzurePowerShellStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a>

---

##### `SupportingScriptUrisInput`<sup>Optional</sup> <a name="SupportingScriptUrisInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.supportingScriptUrisInput"></a>

```go
func SupportingScriptUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `CleanupPreference`<sup>Required</sup> <a name="CleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cleanupPreference"></a>

```go
func CleanupPreference() *string
```

- *Type:* *string

---

##### `CommandLine`<sup>Required</sup> <a name="CommandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.commandLine"></a>

```go
func CommandLine() *string
```

- *Type:* *string

---

##### `ForceUpdateTag`<sup>Required</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forceUpdateTag"></a>

```go
func ForceUpdateTag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrimaryScriptUri`<sup>Required</sup> <a name="PrimaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.primaryScriptUri"></a>

```go
func PrimaryScriptUri() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RetentionInterval`<sup>Required</sup> <a name="RetentionInterval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.retentionInterval"></a>

```go
func RetentionInterval() *string
```

- *Type:* *string

---

##### `ScriptContent`<sup>Required</sup> <a name="ScriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.scriptContent"></a>

```go
func ScriptContent() *string
```

- *Type:* *string

---

##### `SupportingScriptUris`<sup>Required</sup> <a name="SupportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.supportingScriptUris"></a>

```go
func SupportingScriptUris() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceDeploymentScriptAzurePowerShellConfig <a name="ResourceDeploymentScriptAzurePowerShellConfig" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

&resourcedeploymentscriptazurepowershell.ResourceDeploymentScriptAzurePowerShellConfig {
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
	RetentionInterval: *string,
	Version: *string,
	CleanupPreference: *string,
	CommandLine: *string,
	Container: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer,
	EnvironmentVariable: interface{},
	ForceUpdateTag: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity,
	PrimaryScriptUri: *string,
	ScriptContent: *string,
	StorageAccount: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount,
	SupportingScriptUris: *[]*string,
	Tags: *map[string]*string,
	Timeout: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#location ResourceDeploymentScriptAzurePowerShell#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#resource_group_name ResourceDeploymentScriptAzurePowerShell#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.retentionInterval">RetentionInterval</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#retention_interval ResourceDeploymentScriptAzurePowerShell#retention_interval}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#version ResourceDeploymentScriptAzurePowerShell#version}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.cleanupPreference">CleanupPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#cleanup_preference ResourceDeploymentScriptAzurePowerShell#cleanup_preference}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.commandLine">CommandLine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#command_line ResourceDeploymentScriptAzurePowerShell#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.container">Container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.environmentVariable">EnvironmentVariable</a></code> | <code>interface{}</code> | environment_variable block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#force_update_tag ResourceDeploymentScriptAzurePowerShell#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#id ResourceDeploymentScriptAzurePowerShell#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.primaryScriptUri">PrimaryScriptUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#primary_script_uri ResourceDeploymentScriptAzurePowerShell#primary_script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.scriptContent">ScriptContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#script_content ResourceDeploymentScriptAzurePowerShell#script_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.supportingScriptUris">SupportingScriptUris</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#supporting_script_uris ResourceDeploymentScriptAzurePowerShell#supporting_script_uris}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#tags ResourceDeploymentScriptAzurePowerShell#tags}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.timeout">Timeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#timeout ResourceDeploymentScriptAzurePowerShell#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#location ResourceDeploymentScriptAzurePowerShell#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#resource_group_name ResourceDeploymentScriptAzurePowerShell#resource_group_name}.

---

##### `RetentionInterval`<sup>Required</sup> <a name="RetentionInterval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.retentionInterval"></a>

```go
RetentionInterval *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#retention_interval ResourceDeploymentScriptAzurePowerShell#retention_interval}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#version ResourceDeploymentScriptAzurePowerShell#version}.

---

##### `CleanupPreference`<sup>Optional</sup> <a name="CleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.cleanupPreference"></a>

```go
CleanupPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#cleanup_preference ResourceDeploymentScriptAzurePowerShell#cleanup_preference}.

---

##### `CommandLine`<sup>Optional</sup> <a name="CommandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.commandLine"></a>

```go
CommandLine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#command_line ResourceDeploymentScriptAzurePowerShell#command_line}.

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.container"></a>

```go
Container ResourceDeploymentScriptAzurePowerShellContainer
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#container ResourceDeploymentScriptAzurePowerShell#container}

---

##### `EnvironmentVariable`<sup>Optional</sup> <a name="EnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.environmentVariable"></a>

```go
EnvironmentVariable interface{}
```

- *Type:* interface{}

environment_variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#environment_variable ResourceDeploymentScriptAzurePowerShell#environment_variable}

---

##### `ForceUpdateTag`<sup>Optional</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.forceUpdateTag"></a>

```go
ForceUpdateTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#force_update_tag ResourceDeploymentScriptAzurePowerShell#force_update_tag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#id ResourceDeploymentScriptAzurePowerShell#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.identity"></a>

```go
Identity ResourceDeploymentScriptAzurePowerShellIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#identity ResourceDeploymentScriptAzurePowerShell#identity}

---

##### `PrimaryScriptUri`<sup>Optional</sup> <a name="PrimaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.primaryScriptUri"></a>

```go
PrimaryScriptUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#primary_script_uri ResourceDeploymentScriptAzurePowerShell#primary_script_uri}.

---

##### `ScriptContent`<sup>Optional</sup> <a name="ScriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.scriptContent"></a>

```go
ScriptContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#script_content ResourceDeploymentScriptAzurePowerShell#script_content}.

---

##### `StorageAccount`<sup>Optional</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.storageAccount"></a>

```go
StorageAccount ResourceDeploymentScriptAzurePowerShellStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#storage_account ResourceDeploymentScriptAzurePowerShell#storage_account}

---

##### `SupportingScriptUris`<sup>Optional</sup> <a name="SupportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.supportingScriptUris"></a>

```go
SupportingScriptUris *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#supporting_script_uris ResourceDeploymentScriptAzurePowerShell#supporting_script_uris}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#tags ResourceDeploymentScriptAzurePowerShell#tags}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#timeout ResourceDeploymentScriptAzurePowerShell#timeout}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.timeouts"></a>

```go
Timeouts ResourceDeploymentScriptAzurePowerShellTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#timeouts ResourceDeploymentScriptAzurePowerShell#timeouts}

---

### ResourceDeploymentScriptAzurePowerShellContainer <a name="ResourceDeploymentScriptAzurePowerShellContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

&resourcedeploymentscriptazurepowershell.ResourceDeploymentScriptAzurePowerShellContainer {
	ContainerGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer.property.containerGroupName">ContainerGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#container_group_name ResourceDeploymentScriptAzurePowerShell#container_group_name}. |

---

##### `ContainerGroupName`<sup>Optional</sup> <a name="ContainerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer.property.containerGroupName"></a>

```go
ContainerGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#container_group_name ResourceDeploymentScriptAzurePowerShell#container_group_name}.

---

### ResourceDeploymentScriptAzurePowerShellEnvironmentVariable <a name="ResourceDeploymentScriptAzurePowerShellEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

&resourcedeploymentscriptazurepowershell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable {
	Name: *string,
	SecureValue: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.secureValue">SecureValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#secure_value ResourceDeploymentScriptAzurePowerShell#secure_value}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#value ResourceDeploymentScriptAzurePowerShell#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}.

---

##### `SecureValue`<sup>Optional</sup> <a name="SecureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.secureValue"></a>

```go
SecureValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#secure_value ResourceDeploymentScriptAzurePowerShell#secure_value}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#value ResourceDeploymentScriptAzurePowerShell#value}.

---

### ResourceDeploymentScriptAzurePowerShellIdentity <a name="ResourceDeploymentScriptAzurePowerShellIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

&resourcedeploymentscriptazurepowershell.ResourceDeploymentScriptAzurePowerShellIdentity {
	IdentityIds: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#identity_ids ResourceDeploymentScriptAzurePowerShell#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#type ResourceDeploymentScriptAzurePowerShell#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#identity_ids ResourceDeploymentScriptAzurePowerShell#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#type ResourceDeploymentScriptAzurePowerShell#type}.

---

### ResourceDeploymentScriptAzurePowerShellStorageAccount <a name="ResourceDeploymentScriptAzurePowerShellStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

&resourcedeploymentscriptazurepowershell.ResourceDeploymentScriptAzurePowerShellStorageAccount {
	Key: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#key ResourceDeploymentScriptAzurePowerShell#key}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#key ResourceDeploymentScriptAzurePowerShell#key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}.

---

### ResourceDeploymentScriptAzurePowerShellTimeouts <a name="ResourceDeploymentScriptAzurePowerShellTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

&resourcedeploymentscriptazurepowershell.ResourceDeploymentScriptAzurePowerShellTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#create ResourceDeploymentScriptAzurePowerShell#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#delete ResourceDeploymentScriptAzurePowerShell#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#read ResourceDeploymentScriptAzurePowerShell#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#update ResourceDeploymentScriptAzurePowerShell#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#create ResourceDeploymentScriptAzurePowerShell#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#delete ResourceDeploymentScriptAzurePowerShell#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#read ResourceDeploymentScriptAzurePowerShell#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_power_shell#update ResourceDeploymentScriptAzurePowerShell#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceDeploymentScriptAzurePowerShellContainerOutputReference <a name="ResourceDeploymentScriptAzurePowerShellContainerOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

resourcedeploymentscriptazurepowershell.NewResourceDeploymentScriptAzurePowerShellContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceDeploymentScriptAzurePowerShellContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.resetContainerGroupName">ResetContainerGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerGroupName` <a name="ResetContainerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.resetContainerGroupName"></a>

```go
func ResetContainerGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.containerGroupNameInput">ContainerGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.containerGroupName">ContainerGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerGroupNameInput`<sup>Optional</sup> <a name="ContainerGroupNameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.containerGroupNameInput"></a>

```go
func ContainerGroupNameInput() *string
```

- *Type:* *string

---

##### `ContainerGroupName`<sup>Required</sup> <a name="ContainerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.containerGroupName"></a>

```go
func ContainerGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceDeploymentScriptAzurePowerShellContainer
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a>

---


### ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList <a name="ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

resourcedeploymentscriptazurepowershell.NewResourceDeploymentScriptAzurePowerShellEnvironmentVariableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.get"></a>

```go
func Get(index *f64) ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference <a name="ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

resourcedeploymentscriptazurepowershell.NewResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resetSecureValue">ResetSecureValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecureValue` <a name="ResetSecureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resetSecureValue"></a>

```go
func ResetSecureValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.secureValueInput">SecureValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.secureValue">SecureValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecureValueInput`<sup>Optional</sup> <a name="SecureValueInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.secureValueInput"></a>

```go
func SecureValueInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecureValue`<sup>Required</sup> <a name="SecureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.secureValue"></a>

```go
func SecureValue() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceDeploymentScriptAzurePowerShellIdentityOutputReference <a name="ResourceDeploymentScriptAzurePowerShellIdentityOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

resourcedeploymentscriptazurepowershell.NewResourceDeploymentScriptAzurePowerShellIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceDeploymentScriptAzurePowerShellIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceDeploymentScriptAzurePowerShellIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a>

---


### ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference <a name="ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

resourcedeploymentscriptazurepowershell.NewResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceDeploymentScriptAzurePowerShellStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a>

---


### ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference <a name="ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurepowershell"

resourcedeploymentscriptazurepowershell.NewResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



