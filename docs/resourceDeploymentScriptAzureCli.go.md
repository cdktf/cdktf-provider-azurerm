# `resourceDeploymentScriptAzureCli` Submodule <a name="`resourceDeploymentScriptAzureCli` Submodule" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceDeploymentScriptAzureCli <a name="ResourceDeploymentScriptAzureCli" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli azurerm_resource_deployment_script_azure_cli}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

resourcedeploymentscriptazurecli.NewResourceDeploymentScriptAzureCli(scope Construct, id *string, config ResourceDeploymentScriptAzureCliConfig) ResourceDeploymentScriptAzureCli
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig">ResourceDeploymentScriptAzureCliConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig">ResourceDeploymentScriptAzureCliConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putEnvironmentVariable">PutEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putStorageAccount">PutStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCleanupPreference">ResetCleanupPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCommandLine">ResetCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetEnvironmentVariable">ResetEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetForceUpdateTag">ResetForceUpdateTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetPrimaryScriptUri">ResetPrimaryScriptUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetScriptContent">ResetScriptContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetStorageAccount">ResetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetSupportingScriptUris">ResetSupportingScriptUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putContainer"></a>

```go
func PutContainer(value ResourceDeploymentScriptAzureCliContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

---

##### `PutEnvironmentVariable` <a name="PutEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putEnvironmentVariable"></a>

```go
func PutEnvironmentVariable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putEnvironmentVariable.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putIdentity"></a>

```go
func PutIdentity(value ResourceDeploymentScriptAzureCliIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

---

##### `PutStorageAccount` <a name="PutStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putStorageAccount"></a>

```go
func PutStorageAccount(value ResourceDeploymentScriptAzureCliStorageAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putStorageAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts"></a>

```go
func PutTimeouts(value ResourceDeploymentScriptAzureCliTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>

---

##### `ResetCleanupPreference` <a name="ResetCleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCleanupPreference"></a>

```go
func ResetCleanupPreference()
```

##### `ResetCommandLine` <a name="ResetCommandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCommandLine"></a>

```go
func ResetCommandLine()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetEnvironmentVariable` <a name="ResetEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetEnvironmentVariable"></a>

```go
func ResetEnvironmentVariable()
```

##### `ResetForceUpdateTag` <a name="ResetForceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetForceUpdateTag"></a>

```go
func ResetForceUpdateTag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetPrimaryScriptUri` <a name="ResetPrimaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetPrimaryScriptUri"></a>

```go
func ResetPrimaryScriptUri()
```

##### `ResetScriptContent` <a name="ResetScriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetScriptContent"></a>

```go
func ResetScriptContent()
```

##### `ResetStorageAccount` <a name="ResetStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetStorageAccount"></a>

```go
func ResetStorageAccount()
```

##### `ResetSupportingScriptUris` <a name="ResetSupportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetSupportingScriptUris"></a>

```go
func ResetSupportingScriptUris()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceDeploymentScriptAzureCli resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

resourcedeploymentscriptazurecli.ResourceDeploymentScriptAzureCli_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

resourcedeploymentscriptazurecli.ResourceDeploymentScriptAzureCli_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

resourcedeploymentscriptazurecli.ResourceDeploymentScriptAzureCli_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

resourcedeploymentscriptazurecli.ResourceDeploymentScriptAzureCli_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ResourceDeploymentScriptAzureCli resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourceDeploymentScriptAzureCli to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourceDeploymentScriptAzureCli that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ResourceDeploymentScriptAzureCli to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.container">Container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference">ResourceDeploymentScriptAzureCliContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariable">EnvironmentVariable</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList">ResourceDeploymentScriptAzureCliEnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference">ResourceDeploymentScriptAzureCliIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.outputs">Outputs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference">ResourceDeploymentScriptAzureCliStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference">ResourceDeploymentScriptAzureCliTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreferenceInput">CleanupPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLineInput">CommandLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariableInput">EnvironmentVariableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTagInput">ForceUpdateTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUriInput">PrimaryScriptUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionIntervalInput">RetentionIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContentInput">ScriptContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccountInput">StorageAccountInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUrisInput">SupportingScriptUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreference">CleanupPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLine">CommandLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUri">PrimaryScriptUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionInterval">RetentionInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContent">ScriptContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUris">SupportingScriptUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.container"></a>

```go
func Container() ResourceDeploymentScriptAzureCliContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference">ResourceDeploymentScriptAzureCliContainerOutputReference</a>

---

##### `EnvironmentVariable`<sup>Required</sup> <a name="EnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariable"></a>

```go
func EnvironmentVariable() ResourceDeploymentScriptAzureCliEnvironmentVariableList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList">ResourceDeploymentScriptAzureCliEnvironmentVariableList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identity"></a>

```go
func Identity() ResourceDeploymentScriptAzureCliIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference">ResourceDeploymentScriptAzureCliIdentityOutputReference</a>

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.outputs"></a>

```go
func Outputs() *string
```

- *Type:* *string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccount"></a>

```go
func StorageAccount() ResourceDeploymentScriptAzureCliStorageAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference">ResourceDeploymentScriptAzureCliStorageAccountOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeouts"></a>

```go
func Timeouts() ResourceDeploymentScriptAzureCliTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference">ResourceDeploymentScriptAzureCliTimeoutsOutputReference</a>

---

##### `CleanupPreferenceInput`<sup>Optional</sup> <a name="CleanupPreferenceInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreferenceInput"></a>

```go
func CleanupPreferenceInput() *string
```

- *Type:* *string

---

##### `CommandLineInput`<sup>Optional</sup> <a name="CommandLineInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLineInput"></a>

```go
func CommandLineInput() *string
```

- *Type:* *string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.containerInput"></a>

```go
func ContainerInput() ResourceDeploymentScriptAzureCliContainer
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

---

##### `EnvironmentVariableInput`<sup>Optional</sup> <a name="EnvironmentVariableInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariableInput"></a>

```go
func EnvironmentVariableInput() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdateTagInput`<sup>Optional</sup> <a name="ForceUpdateTagInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTagInput"></a>

```go
func ForceUpdateTagInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identityInput"></a>

```go
func IdentityInput() ResourceDeploymentScriptAzureCliIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryScriptUriInput`<sup>Optional</sup> <a name="PrimaryScriptUriInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUriInput"></a>

```go
func PrimaryScriptUriInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RetentionIntervalInput`<sup>Optional</sup> <a name="RetentionIntervalInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionIntervalInput"></a>

```go
func RetentionIntervalInput() *string
```

- *Type:* *string

---

##### `ScriptContentInput`<sup>Optional</sup> <a name="ScriptContentInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContentInput"></a>

```go
func ScriptContentInput() *string
```

- *Type:* *string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccountInput"></a>

```go
func StorageAccountInput() ResourceDeploymentScriptAzureCliStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

---

##### `SupportingScriptUrisInput`<sup>Optional</sup> <a name="SupportingScriptUrisInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUrisInput"></a>

```go
func SupportingScriptUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `CleanupPreference`<sup>Required</sup> <a name="CleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreference"></a>

```go
func CleanupPreference() *string
```

- *Type:* *string

---

##### `CommandLine`<sup>Required</sup> <a name="CommandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLine"></a>

```go
func CommandLine() *string
```

- *Type:* *string

---

##### `ForceUpdateTag`<sup>Required</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTag"></a>

```go
func ForceUpdateTag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrimaryScriptUri`<sup>Required</sup> <a name="PrimaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUri"></a>

```go
func PrimaryScriptUri() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RetentionInterval`<sup>Required</sup> <a name="RetentionInterval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionInterval"></a>

```go
func RetentionInterval() *string
```

- *Type:* *string

---

##### `ScriptContent`<sup>Required</sup> <a name="ScriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContent"></a>

```go
func ScriptContent() *string
```

- *Type:* *string

---

##### `SupportingScriptUris`<sup>Required</sup> <a name="SupportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUris"></a>

```go
func SupportingScriptUris() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceDeploymentScriptAzureCliConfig <a name="ResourceDeploymentScriptAzureCliConfig" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

&resourcedeploymentscriptazurecli.ResourceDeploymentScriptAzureCliConfig {
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
	Container: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer,
	EnvironmentVariable: interface{},
	ForceUpdateTag: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity,
	PrimaryScriptUri: *string,
	ScriptContent: *string,
	StorageAccount: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount,
	SupportingScriptUris: *[]*string,
	Tags: *map[string]*string,
	Timeout: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#location ResourceDeploymentScriptAzureCli#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#resource_group_name ResourceDeploymentScriptAzureCli#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.retentionInterval">RetentionInterval</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#retention_interval ResourceDeploymentScriptAzureCli#retention_interval}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#version ResourceDeploymentScriptAzureCli#version}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.cleanupPreference">CleanupPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#cleanup_preference ResourceDeploymentScriptAzureCli#cleanup_preference}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.commandLine">CommandLine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#command_line ResourceDeploymentScriptAzureCli#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.container">Container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.environmentVariable">EnvironmentVariable</a></code> | <code>interface{}</code> | environment_variable block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#force_update_tag ResourceDeploymentScriptAzureCli#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#id ResourceDeploymentScriptAzureCli#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.primaryScriptUri">PrimaryScriptUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#primary_script_uri ResourceDeploymentScriptAzureCli#primary_script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.scriptContent">ScriptContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#script_content ResourceDeploymentScriptAzureCli#script_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.supportingScriptUris">SupportingScriptUris</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#supporting_script_uris ResourceDeploymentScriptAzureCli#supporting_script_uris}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#tags ResourceDeploymentScriptAzureCli#tags}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeout">Timeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#timeout ResourceDeploymentScriptAzureCli#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#location ResourceDeploymentScriptAzureCli#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#resource_group_name ResourceDeploymentScriptAzureCli#resource_group_name}.

---

##### `RetentionInterval`<sup>Required</sup> <a name="RetentionInterval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.retentionInterval"></a>

```go
RetentionInterval *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#retention_interval ResourceDeploymentScriptAzureCli#retention_interval}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#version ResourceDeploymentScriptAzureCli#version}.

---

##### `CleanupPreference`<sup>Optional</sup> <a name="CleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.cleanupPreference"></a>

```go
CleanupPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#cleanup_preference ResourceDeploymentScriptAzureCli#cleanup_preference}.

---

##### `CommandLine`<sup>Optional</sup> <a name="CommandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.commandLine"></a>

```go
CommandLine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#command_line ResourceDeploymentScriptAzureCli#command_line}.

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.container"></a>

```go
Container ResourceDeploymentScriptAzureCliContainer
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#container ResourceDeploymentScriptAzureCli#container}

---

##### `EnvironmentVariable`<sup>Optional</sup> <a name="EnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.environmentVariable"></a>

```go
EnvironmentVariable interface{}
```

- *Type:* interface{}

environment_variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#environment_variable ResourceDeploymentScriptAzureCli#environment_variable}

---

##### `ForceUpdateTag`<sup>Optional</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forceUpdateTag"></a>

```go
ForceUpdateTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#force_update_tag ResourceDeploymentScriptAzureCli#force_update_tag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#id ResourceDeploymentScriptAzureCli#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.identity"></a>

```go
Identity ResourceDeploymentScriptAzureCliIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#identity ResourceDeploymentScriptAzureCli#identity}

---

##### `PrimaryScriptUri`<sup>Optional</sup> <a name="PrimaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.primaryScriptUri"></a>

```go
PrimaryScriptUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#primary_script_uri ResourceDeploymentScriptAzureCli#primary_script_uri}.

---

##### `ScriptContent`<sup>Optional</sup> <a name="ScriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.scriptContent"></a>

```go
ScriptContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#script_content ResourceDeploymentScriptAzureCli#script_content}.

---

##### `StorageAccount`<sup>Optional</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.storageAccount"></a>

```go
StorageAccount ResourceDeploymentScriptAzureCliStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#storage_account ResourceDeploymentScriptAzureCli#storage_account}

---

##### `SupportingScriptUris`<sup>Optional</sup> <a name="SupportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.supportingScriptUris"></a>

```go
SupportingScriptUris *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#supporting_script_uris ResourceDeploymentScriptAzureCli#supporting_script_uris}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#tags ResourceDeploymentScriptAzureCli#tags}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#timeout ResourceDeploymentScriptAzureCli#timeout}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeouts"></a>

```go
Timeouts ResourceDeploymentScriptAzureCliTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#timeouts ResourceDeploymentScriptAzureCli#timeouts}

---

### ResourceDeploymentScriptAzureCliContainer <a name="ResourceDeploymentScriptAzureCliContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

&resourcedeploymentscriptazurecli.ResourceDeploymentScriptAzureCliContainer {
	ContainerGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer.property.containerGroupName">ContainerGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#container_group_name ResourceDeploymentScriptAzureCli#container_group_name}. |

---

##### `ContainerGroupName`<sup>Optional</sup> <a name="ContainerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer.property.containerGroupName"></a>

```go
ContainerGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#container_group_name ResourceDeploymentScriptAzureCli#container_group_name}.

---

### ResourceDeploymentScriptAzureCliEnvironmentVariable <a name="ResourceDeploymentScriptAzureCliEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

&resourcedeploymentscriptazurecli.ResourceDeploymentScriptAzureCliEnvironmentVariable {
	Name: *string,
	SecureValue: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.secureValue">SecureValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#secure_value ResourceDeploymentScriptAzureCli#secure_value}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#value ResourceDeploymentScriptAzureCli#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

##### `SecureValue`<sup>Optional</sup> <a name="SecureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.secureValue"></a>

```go
SecureValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#secure_value ResourceDeploymentScriptAzureCli#secure_value}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#value ResourceDeploymentScriptAzureCli#value}.

---

### ResourceDeploymentScriptAzureCliIdentity <a name="ResourceDeploymentScriptAzureCliIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

&resourcedeploymentscriptazurecli.ResourceDeploymentScriptAzureCliIdentity {
	IdentityIds: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#identity_ids ResourceDeploymentScriptAzureCli#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#type ResourceDeploymentScriptAzureCli#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#identity_ids ResourceDeploymentScriptAzureCli#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#type ResourceDeploymentScriptAzureCli#type}.

---

### ResourceDeploymentScriptAzureCliStorageAccount <a name="ResourceDeploymentScriptAzureCliStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

&resourcedeploymentscriptazurecli.ResourceDeploymentScriptAzureCliStorageAccount {
	Key: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#key ResourceDeploymentScriptAzureCli#key}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#key ResourceDeploymentScriptAzureCli#key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

### ResourceDeploymentScriptAzureCliTimeouts <a name="ResourceDeploymentScriptAzureCliTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

&resourcedeploymentscriptazurecli.ResourceDeploymentScriptAzureCliTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#create ResourceDeploymentScriptAzureCli#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#delete ResourceDeploymentScriptAzureCli#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#read ResourceDeploymentScriptAzureCli#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#update ResourceDeploymentScriptAzureCli#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#create ResourceDeploymentScriptAzureCli#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#delete ResourceDeploymentScriptAzureCli#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#read ResourceDeploymentScriptAzureCli#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/resource_deployment_script_azure_cli#update ResourceDeploymentScriptAzureCli#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceDeploymentScriptAzureCliContainerOutputReference <a name="ResourceDeploymentScriptAzureCliContainerOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

resourcedeploymentscriptazurecli.NewResourceDeploymentScriptAzureCliContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceDeploymentScriptAzureCliContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resetContainerGroupName">ResetContainerGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerGroupName` <a name="ResetContainerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resetContainerGroupName"></a>

```go
func ResetContainerGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupNameInput">ContainerGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupName">ContainerGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerGroupNameInput`<sup>Optional</sup> <a name="ContainerGroupNameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupNameInput"></a>

```go
func ContainerGroupNameInput() *string
```

- *Type:* *string

---

##### `ContainerGroupName`<sup>Required</sup> <a name="ContainerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupName"></a>

```go
func ContainerGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceDeploymentScriptAzureCliContainer
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

---


### ResourceDeploymentScriptAzureCliEnvironmentVariableList <a name="ResourceDeploymentScriptAzureCliEnvironmentVariableList" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

resourcedeploymentscriptazurecli.NewResourceDeploymentScriptAzureCliEnvironmentVariableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourceDeploymentScriptAzureCliEnvironmentVariableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.get"></a>

```go
func Get(index *f64) ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference <a name="ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

resourcedeploymentscriptazurecli.NewResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetSecureValue">ResetSecureValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecureValue` <a name="ResetSecureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetSecureValue"></a>

```go
func ResetSecureValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValueInput">SecureValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValue">SecureValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecureValueInput`<sup>Optional</sup> <a name="SecureValueInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValueInput"></a>

```go
func SecureValueInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecureValue`<sup>Required</sup> <a name="SecureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValue"></a>

```go
func SecureValue() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceDeploymentScriptAzureCliIdentityOutputReference <a name="ResourceDeploymentScriptAzureCliIdentityOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

resourcedeploymentscriptazurecli.NewResourceDeploymentScriptAzureCliIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceDeploymentScriptAzureCliIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceDeploymentScriptAzureCliIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

---


### ResourceDeploymentScriptAzureCliStorageAccountOutputReference <a name="ResourceDeploymentScriptAzureCliStorageAccountOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

resourcedeploymentscriptazurecli.NewResourceDeploymentScriptAzureCliStorageAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceDeploymentScriptAzureCliStorageAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceDeploymentScriptAzureCliStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

---


### ResourceDeploymentScriptAzureCliTimeoutsOutputReference <a name="ResourceDeploymentScriptAzureCliTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/resourcedeploymentscriptazurecli"

resourcedeploymentscriptazurecli.NewResourceDeploymentScriptAzureCliTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceDeploymentScriptAzureCliTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



