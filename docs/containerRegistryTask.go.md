# `azurerm_container_registry_task`

Refer to the Terraform Registory for docs: [`azurerm_container_registry_task`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task).

# `containerRegistryTask` Submodule <a name="`containerRegistryTask` Submodule" id="@cdktf/provider-azurerm.containerRegistryTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryTask <a name="ContainerRegistryTask" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task azurerm_container_registry_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTask(scope Construct, id *string, config ContainerRegistryTaskConfig) ContainerRegistryTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig">ContainerRegistryTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig">ContainerRegistryTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putAgentSetting">PutAgentSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putBaseImageTrigger">PutBaseImageTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep">PutDockerStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putEncodedStep">PutEncodedStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putFileStep">PutFileStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putPlatform">PutPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putRegistryCredential">PutRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putSourceTrigger">PutSourceTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimerTrigger">PutTimerTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetAgentPoolName">ResetAgentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetAgentSetting">ResetAgentSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetBaseImageTrigger">ResetBaseImageTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetDockerStep">ResetDockerStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetEncodedStep">ResetEncodedStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetFileStep">ResetFileStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetIsSystemTask">ResetIsSystemTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetLogTemplate">ResetLogTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetRegistryCredential">ResetRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetSourceTrigger">ResetSourceTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimerTrigger">ResetTimerTrigger</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAgentSetting` <a name="PutAgentSetting" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putAgentSetting"></a>

```go
func PutAgentSetting(value ContainerRegistryTaskAgentSetting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putAgentSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a>

---

##### `PutBaseImageTrigger` <a name="PutBaseImageTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putBaseImageTrigger"></a>

```go
func PutBaseImageTrigger(value ContainerRegistryTaskBaseImageTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putBaseImageTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a>

---

##### `PutDockerStep` <a name="PutDockerStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep"></a>

```go
func PutDockerStep(value ContainerRegistryTaskDockerStep)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putDockerStep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a>

---

##### `PutEncodedStep` <a name="PutEncodedStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putEncodedStep"></a>

```go
func PutEncodedStep(value ContainerRegistryTaskEncodedStep)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putEncodedStep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a>

---

##### `PutFileStep` <a name="PutFileStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putFileStep"></a>

```go
func PutFileStep(value ContainerRegistryTaskFileStep)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putFileStep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putIdentity"></a>

```go
func PutIdentity(value ContainerRegistryTaskIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a>

---

##### `PutPlatform` <a name="PutPlatform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putPlatform"></a>

```go
func PutPlatform(value ContainerRegistryTaskPlatform)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putPlatform.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a>

---

##### `PutRegistryCredential` <a name="PutRegistryCredential" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putRegistryCredential"></a>

```go
func PutRegistryCredential(value ContainerRegistryTaskRegistryCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putRegistryCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a>

---

##### `PutSourceTrigger` <a name="PutSourceTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putSourceTrigger"></a>

```go
func PutSourceTrigger(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putSourceTrigger.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimeouts"></a>

```go
func PutTimeouts(value ContainerRegistryTaskTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts">ContainerRegistryTaskTimeouts</a>

---

##### `PutTimerTrigger` <a name="PutTimerTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimerTrigger"></a>

```go
func PutTimerTrigger(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.putTimerTrigger.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAgentPoolName` <a name="ResetAgentPoolName" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetAgentPoolName"></a>

```go
func ResetAgentPoolName()
```

##### `ResetAgentSetting` <a name="ResetAgentSetting" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetAgentSetting"></a>

```go
func ResetAgentSetting()
```

##### `ResetBaseImageTrigger` <a name="ResetBaseImageTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetBaseImageTrigger"></a>

```go
func ResetBaseImageTrigger()
```

##### `ResetDockerStep` <a name="ResetDockerStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetDockerStep"></a>

```go
func ResetDockerStep()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEncodedStep` <a name="ResetEncodedStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetEncodedStep"></a>

```go
func ResetEncodedStep()
```

##### `ResetFileStep` <a name="ResetFileStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetFileStep"></a>

```go
func ResetFileStep()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetIsSystemTask` <a name="ResetIsSystemTask" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetIsSystemTask"></a>

```go
func ResetIsSystemTask()
```

##### `ResetLogTemplate` <a name="ResetLogTemplate" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetLogTemplate"></a>

```go
func ResetLogTemplate()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetPlatform"></a>

```go
func ResetPlatform()
```

##### `ResetRegistryCredential` <a name="ResetRegistryCredential" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetRegistryCredential"></a>

```go
func ResetRegistryCredential()
```

##### `ResetSourceTrigger` <a name="ResetSourceTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetSourceTrigger"></a>

```go
func ResetSourceTrigger()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimerTrigger` <a name="ResetTimerTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.resetTimerTrigger"></a>

```go
func ResetTimerTrigger()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.ContainerRegistryTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.ContainerRegistryTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.ContainerRegistryTask_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentSetting">AgentSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference">ContainerRegistryTaskAgentSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.baseImageTrigger">BaseImageTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference">ContainerRegistryTaskBaseImageTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dockerStep">DockerStep</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference">ContainerRegistryTaskDockerStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.encodedStep">EncodedStep</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference">ContainerRegistryTaskEncodedStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fileStep">FileStep</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference">ContainerRegistryTaskFileStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference">ContainerRegistryTaskIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.platform">Platform</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference">ContainerRegistryTaskPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.registryCredential">RegistryCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference">ContainerRegistryTaskRegistryCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.sourceTrigger">SourceTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList">ContainerRegistryTaskSourceTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference">ContainerRegistryTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timerTrigger">TimerTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList">ContainerRegistryTaskTimerTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentPoolNameInput">AgentPoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentSettingInput">AgentSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.baseImageTriggerInput">BaseImageTriggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.containerRegistryIdInput">ContainerRegistryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dockerStepInput">DockerStepInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.encodedStepInput">EncodedStepInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fileStepInput">FileStepInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.isSystemTaskInput">IsSystemTaskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.logTemplateInput">LogTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.platformInput">PlatformInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.registryCredentialInput">RegistryCredentialInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.sourceTriggerInput">SourceTriggerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timerTriggerInput">TimerTriggerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentPoolName">AgentPoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.containerRegistryId">ContainerRegistryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.isSystemTask">IsSystemTask</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.logTemplate">LogTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentSetting`<sup>Required</sup> <a name="AgentSetting" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentSetting"></a>

```go
func AgentSetting() ContainerRegistryTaskAgentSettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference">ContainerRegistryTaskAgentSettingOutputReference</a>

---

##### `BaseImageTrigger`<sup>Required</sup> <a name="BaseImageTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.baseImageTrigger"></a>

```go
func BaseImageTrigger() ContainerRegistryTaskBaseImageTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference">ContainerRegistryTaskBaseImageTriggerOutputReference</a>

---

##### `DockerStep`<sup>Required</sup> <a name="DockerStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dockerStep"></a>

```go
func DockerStep() ContainerRegistryTaskDockerStepOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference">ContainerRegistryTaskDockerStepOutputReference</a>

---

##### `EncodedStep`<sup>Required</sup> <a name="EncodedStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.encodedStep"></a>

```go
func EncodedStep() ContainerRegistryTaskEncodedStepOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference">ContainerRegistryTaskEncodedStepOutputReference</a>

---

##### `FileStep`<sup>Required</sup> <a name="FileStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fileStep"></a>

```go
func FileStep() ContainerRegistryTaskFileStepOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference">ContainerRegistryTaskFileStepOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.identity"></a>

```go
func Identity() ContainerRegistryTaskIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference">ContainerRegistryTaskIdentityOutputReference</a>

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.platform"></a>

```go
func Platform() ContainerRegistryTaskPlatformOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference">ContainerRegistryTaskPlatformOutputReference</a>

---

##### `RegistryCredential`<sup>Required</sup> <a name="RegistryCredential" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.registryCredential"></a>

```go
func RegistryCredential() ContainerRegistryTaskRegistryCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference">ContainerRegistryTaskRegistryCredentialOutputReference</a>

---

##### `SourceTrigger`<sup>Required</sup> <a name="SourceTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.sourceTrigger"></a>

```go
func SourceTrigger() ContainerRegistryTaskSourceTriggerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList">ContainerRegistryTaskSourceTriggerList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeouts"></a>

```go
func Timeouts() ContainerRegistryTaskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference">ContainerRegistryTaskTimeoutsOutputReference</a>

---

##### `TimerTrigger`<sup>Required</sup> <a name="TimerTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timerTrigger"></a>

```go
func TimerTrigger() ContainerRegistryTaskTimerTriggerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList">ContainerRegistryTaskTimerTriggerList</a>

---

##### `AgentPoolNameInput`<sup>Optional</sup> <a name="AgentPoolNameInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentPoolNameInput"></a>

```go
func AgentPoolNameInput() *string
```

- *Type:* *string

---

##### `AgentSettingInput`<sup>Optional</sup> <a name="AgentSettingInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentSettingInput"></a>

```go
func AgentSettingInput() ContainerRegistryTaskAgentSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a>

---

##### `BaseImageTriggerInput`<sup>Optional</sup> <a name="BaseImageTriggerInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.baseImageTriggerInput"></a>

```go
func BaseImageTriggerInput() ContainerRegistryTaskBaseImageTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a>

---

##### `ContainerRegistryIdInput`<sup>Optional</sup> <a name="ContainerRegistryIdInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.containerRegistryIdInput"></a>

```go
func ContainerRegistryIdInput() *string
```

- *Type:* *string

---

##### `DockerStepInput`<sup>Optional</sup> <a name="DockerStepInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.dockerStepInput"></a>

```go
func DockerStepInput() ContainerRegistryTaskDockerStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EncodedStepInput`<sup>Optional</sup> <a name="EncodedStepInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.encodedStepInput"></a>

```go
func EncodedStepInput() ContainerRegistryTaskEncodedStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a>

---

##### `FileStepInput`<sup>Optional</sup> <a name="FileStepInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.fileStepInput"></a>

```go
func FileStepInput() ContainerRegistryTaskFileStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.identityInput"></a>

```go
func IdentityInput() ContainerRegistryTaskIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsSystemTaskInput`<sup>Optional</sup> <a name="IsSystemTaskInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.isSystemTaskInput"></a>

```go
func IsSystemTaskInput() interface{}
```

- *Type:* interface{}

---

##### `LogTemplateInput`<sup>Optional</sup> <a name="LogTemplateInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.logTemplateInput"></a>

```go
func LogTemplateInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.platformInput"></a>

```go
func PlatformInput() ContainerRegistryTaskPlatform
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a>

---

##### `RegistryCredentialInput`<sup>Optional</sup> <a name="RegistryCredentialInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.registryCredentialInput"></a>

```go
func RegistryCredentialInput() ContainerRegistryTaskRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a>

---

##### `SourceTriggerInput`<sup>Optional</sup> <a name="SourceTriggerInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.sourceTriggerInput"></a>

```go
func SourceTriggerInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimerTriggerInput`<sup>Optional</sup> <a name="TimerTriggerInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timerTriggerInput"></a>

```go
func TimerTriggerInput() interface{}
```

- *Type:* interface{}

---

##### `AgentPoolName`<sup>Required</sup> <a name="AgentPoolName" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.agentPoolName"></a>

```go
func AgentPoolName() *string
```

- *Type:* *string

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.containerRegistryId"></a>

```go
func ContainerRegistryId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsSystemTask`<sup>Required</sup> <a name="IsSystemTask" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.isSystemTask"></a>

```go
func IsSystemTask() interface{}
```

- *Type:* interface{}

---

##### `LogTemplate`<sup>Required</sup> <a name="LogTemplate" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.logTemplate"></a>

```go
func LogTemplate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryTaskAgentSetting <a name="ContainerRegistryTaskAgentSetting" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskAgentSetting {
	Cpu: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting.property.cpu">Cpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#cpu ContainerRegistryTask#cpu}. |

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#cpu ContainerRegistryTask#cpu}.

---

### ContainerRegistryTaskBaseImageTrigger <a name="ContainerRegistryTaskBaseImageTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskBaseImageTrigger {
	Name: *string,
	Type: *string,
	Enabled: interface{},
	UpdateTriggerEndpoint: *string,
	UpdateTriggerPayloadType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#type ContainerRegistryTask#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.updateTriggerEndpoint">UpdateTriggerEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#update_trigger_endpoint ContainerRegistryTask#update_trigger_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.updateTriggerPayloadType">UpdateTriggerPayloadType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#update_trigger_payload_type ContainerRegistryTask#update_trigger_payload_type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#type ContainerRegistryTask#type}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}.

---

##### `UpdateTriggerEndpoint`<sup>Optional</sup> <a name="UpdateTriggerEndpoint" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.updateTriggerEndpoint"></a>

```go
UpdateTriggerEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#update_trigger_endpoint ContainerRegistryTask#update_trigger_endpoint}.

---

##### `UpdateTriggerPayloadType`<sup>Optional</sup> <a name="UpdateTriggerPayloadType" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger.property.updateTriggerPayloadType"></a>

```go
UpdateTriggerPayloadType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#update_trigger_payload_type ContainerRegistryTask#update_trigger_payload_type}.

---

### ContainerRegistryTaskConfig <a name="ContainerRegistryTaskConfig" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerRegistryId: *string,
	Name: *string,
	AgentPoolName: *string,
	AgentSetting: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerRegistryTask.ContainerRegistryTaskAgentSetting,
	BaseImageTrigger: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger,
	DockerStep: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerRegistryTask.ContainerRegistryTaskDockerStep,
	Enabled: interface{},
	EncodedStep: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerRegistryTask.ContainerRegistryTaskEncodedStep,
	FileStep: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerRegistryTask.ContainerRegistryTaskFileStep,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerRegistryTask.ContainerRegistryTaskIdentity,
	IsSystemTask: interface{},
	LogTemplate: *string,
	Platform: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerRegistryTask.ContainerRegistryTaskPlatform,
	RegistryCredential: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerRegistryTask.ContainerRegistryTaskRegistryCredential,
	SourceTrigger: interface{},
	Tags: *map[string]*string,
	TimeoutInSeconds: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerRegistryTask.ContainerRegistryTaskTimeouts,
	TimerTrigger: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.containerRegistryId">ContainerRegistryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#container_registry_id ContainerRegistryTask#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.agentPoolName">AgentPoolName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#agent_pool_name ContainerRegistryTask#agent_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.agentSetting">AgentSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a></code> | agent_setting block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.baseImageTrigger">BaseImageTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a></code> | base_image_trigger block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.dockerStep">DockerStep</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a></code> | docker_step block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.encodedStep">EncodedStep</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a></code> | encoded_step block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.fileStep">FileStep</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a></code> | file_step block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#id ContainerRegistryTask#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.isSystemTask">IsSystemTask</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#is_system_task ContainerRegistryTask#is_system_task}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.logTemplate">LogTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#log_template ContainerRegistryTask#log_template}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.platform">Platform</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a></code> | platform block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.registryCredential">RegistryCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a></code> | registry_credential block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.sourceTrigger">SourceTrigger</a></code> | <code>interface{}</code> | source_trigger block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#tags ContainerRegistryTask#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#timeout_in_seconds ContainerRegistryTask#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts">ContainerRegistryTaskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timerTrigger">TimerTrigger</a></code> | <code>interface{}</code> | timer_trigger block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.containerRegistryId"></a>

```go
ContainerRegistryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#container_registry_id ContainerRegistryTask#container_registry_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}.

---

##### `AgentPoolName`<sup>Optional</sup> <a name="AgentPoolName" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.agentPoolName"></a>

```go
AgentPoolName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#agent_pool_name ContainerRegistryTask#agent_pool_name}.

---

##### `AgentSetting`<sup>Optional</sup> <a name="AgentSetting" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.agentSetting"></a>

```go
AgentSetting ContainerRegistryTaskAgentSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a>

agent_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#agent_setting ContainerRegistryTask#agent_setting}

---

##### `BaseImageTrigger`<sup>Optional</sup> <a name="BaseImageTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.baseImageTrigger"></a>

```go
BaseImageTrigger ContainerRegistryTaskBaseImageTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a>

base_image_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#base_image_trigger ContainerRegistryTask#base_image_trigger}

---

##### `DockerStep`<sup>Optional</sup> <a name="DockerStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.dockerStep"></a>

```go
DockerStep ContainerRegistryTaskDockerStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a>

docker_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#docker_step ContainerRegistryTask#docker_step}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}.

---

##### `EncodedStep`<sup>Optional</sup> <a name="EncodedStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.encodedStep"></a>

```go
EncodedStep ContainerRegistryTaskEncodedStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a>

encoded_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#encoded_step ContainerRegistryTask#encoded_step}

---

##### `FileStep`<sup>Optional</sup> <a name="FileStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.fileStep"></a>

```go
FileStep ContainerRegistryTaskFileStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a>

file_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#file_step ContainerRegistryTask#file_step}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#id ContainerRegistryTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.identity"></a>

```go
Identity ContainerRegistryTaskIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#identity ContainerRegistryTask#identity}

---

##### `IsSystemTask`<sup>Optional</sup> <a name="IsSystemTask" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.isSystemTask"></a>

```go
IsSystemTask interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#is_system_task ContainerRegistryTask#is_system_task}.

---

##### `LogTemplate`<sup>Optional</sup> <a name="LogTemplate" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.logTemplate"></a>

```go
LogTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#log_template ContainerRegistryTask#log_template}.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.platform"></a>

```go
Platform ContainerRegistryTaskPlatform
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a>

platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#platform ContainerRegistryTask#platform}

---

##### `RegistryCredential`<sup>Optional</sup> <a name="RegistryCredential" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.registryCredential"></a>

```go
RegistryCredential ContainerRegistryTaskRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a>

registry_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#registry_credential ContainerRegistryTask#registry_credential}

---

##### `SourceTrigger`<sup>Optional</sup> <a name="SourceTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.sourceTrigger"></a>

```go
SourceTrigger interface{}
```

- *Type:* interface{}

source_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#source_trigger ContainerRegistryTask#source_trigger}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#tags ContainerRegistryTask#tags}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#timeout_in_seconds ContainerRegistryTask#timeout_in_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timeouts"></a>

```go
Timeouts ContainerRegistryTaskTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts">ContainerRegistryTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#timeouts ContainerRegistryTask#timeouts}

---

##### `TimerTrigger`<sup>Optional</sup> <a name="TimerTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskConfig.property.timerTrigger"></a>

```go
TimerTrigger interface{}
```

- *Type:* interface{}

timer_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#timer_trigger ContainerRegistryTask#timer_trigger}

---

### ContainerRegistryTaskDockerStep <a name="ContainerRegistryTaskDockerStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskDockerStep {
	ContextAccessToken: *string,
	ContextPath: *string,
	DockerfilePath: *string,
	Arguments: *map[string]*string,
	CacheEnabled: interface{},
	ImageNames: *[]*string,
	PushEnabled: interface{},
	SecretArguments: *map[string]*string,
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.contextAccessToken">ContextAccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.contextPath">ContextPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.dockerfilePath">DockerfilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#dockerfile_path ContainerRegistryTask#dockerfile_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.arguments">Arguments</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#arguments ContainerRegistryTask#arguments}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.cacheEnabled">CacheEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#cache_enabled ContainerRegistryTask#cache_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.imageNames">ImageNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#image_names ContainerRegistryTask#image_names}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.pushEnabled">PushEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#push_enabled ContainerRegistryTask#push_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.secretArguments">SecretArguments</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#secret_arguments ContainerRegistryTask#secret_arguments}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#target ContainerRegistryTask#target}. |

---

##### `ContextAccessToken`<sup>Required</sup> <a name="ContextAccessToken" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.contextAccessToken"></a>

```go
ContextAccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}.

---

##### `ContextPath`<sup>Required</sup> <a name="ContextPath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.contextPath"></a>

```go
ContextPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}.

---

##### `DockerfilePath`<sup>Required</sup> <a name="DockerfilePath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.dockerfilePath"></a>

```go
DockerfilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#dockerfile_path ContainerRegistryTask#dockerfile_path}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.arguments"></a>

```go
Arguments *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#arguments ContainerRegistryTask#arguments}.

---

##### `CacheEnabled`<sup>Optional</sup> <a name="CacheEnabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.cacheEnabled"></a>

```go
CacheEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#cache_enabled ContainerRegistryTask#cache_enabled}.

---

##### `ImageNames`<sup>Optional</sup> <a name="ImageNames" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.imageNames"></a>

```go
ImageNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#image_names ContainerRegistryTask#image_names}.

---

##### `PushEnabled`<sup>Optional</sup> <a name="PushEnabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.pushEnabled"></a>

```go
PushEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#push_enabled ContainerRegistryTask#push_enabled}.

---

##### `SecretArguments`<sup>Optional</sup> <a name="SecretArguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.secretArguments"></a>

```go
SecretArguments *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#secret_arguments ContainerRegistryTask#secret_arguments}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#target ContainerRegistryTask#target}.

---

### ContainerRegistryTaskEncodedStep <a name="ContainerRegistryTaskEncodedStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskEncodedStep {
	TaskContent: *string,
	ContextAccessToken: *string,
	ContextPath: *string,
	SecretValues: *map[string]*string,
	ValueContent: *string,
	Values: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.taskContent">TaskContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#task_content ContainerRegistryTask#task_content}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.contextAccessToken">ContextAccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.contextPath">ContextPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.secretValues">SecretValues</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#secret_values ContainerRegistryTask#secret_values}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.valueContent">ValueContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#value_content ContainerRegistryTask#value_content}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.values">Values</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#values ContainerRegistryTask#values}. |

---

##### `TaskContent`<sup>Required</sup> <a name="TaskContent" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.taskContent"></a>

```go
TaskContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#task_content ContainerRegistryTask#task_content}.

---

##### `ContextAccessToken`<sup>Optional</sup> <a name="ContextAccessToken" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.contextAccessToken"></a>

```go
ContextAccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}.

---

##### `ContextPath`<sup>Optional</sup> <a name="ContextPath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.contextPath"></a>

```go
ContextPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}.

---

##### `SecretValues`<sup>Optional</sup> <a name="SecretValues" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.secretValues"></a>

```go
SecretValues *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#secret_values ContainerRegistryTask#secret_values}.

---

##### `ValueContent`<sup>Optional</sup> <a name="ValueContent" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.valueContent"></a>

```go
ValueContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#value_content ContainerRegistryTask#value_content}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep.property.values"></a>

```go
Values *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#values ContainerRegistryTask#values}.

---

### ContainerRegistryTaskFileStep <a name="ContainerRegistryTaskFileStep" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskFileStep {
	TaskFilePath: *string,
	ContextAccessToken: *string,
	ContextPath: *string,
	SecretValues: *map[string]*string,
	ValueFilePath: *string,
	Values: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.taskFilePath">TaskFilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#task_file_path ContainerRegistryTask#task_file_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.contextAccessToken">ContextAccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.contextPath">ContextPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.secretValues">SecretValues</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#secret_values ContainerRegistryTask#secret_values}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.valueFilePath">ValueFilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#value_file_path ContainerRegistryTask#value_file_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.values">Values</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#values ContainerRegistryTask#values}. |

---

##### `TaskFilePath`<sup>Required</sup> <a name="TaskFilePath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.taskFilePath"></a>

```go
TaskFilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#task_file_path ContainerRegistryTask#task_file_path}.

---

##### `ContextAccessToken`<sup>Optional</sup> <a name="ContextAccessToken" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.contextAccessToken"></a>

```go
ContextAccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_access_token ContainerRegistryTask#context_access_token}.

---

##### `ContextPath`<sup>Optional</sup> <a name="ContextPath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.contextPath"></a>

```go
ContextPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#context_path ContainerRegistryTask#context_path}.

---

##### `SecretValues`<sup>Optional</sup> <a name="SecretValues" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.secretValues"></a>

```go
SecretValues *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#secret_values ContainerRegistryTask#secret_values}.

---

##### `ValueFilePath`<sup>Optional</sup> <a name="ValueFilePath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.valueFilePath"></a>

```go
ValueFilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#value_file_path ContainerRegistryTask#value_file_path}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep.property.values"></a>

```go
Values *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#values ContainerRegistryTask#values}.

---

### ContainerRegistryTaskIdentity <a name="ContainerRegistryTaskIdentity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#type ContainerRegistryTask#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#identity_ids ContainerRegistryTask#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#type ContainerRegistryTask#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#identity_ids ContainerRegistryTask#identity_ids}.

---

### ContainerRegistryTaskPlatform <a name="ContainerRegistryTaskPlatform" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskPlatform {
	Os: *string,
	Architecture: *string,
	Variant: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.os">Os</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#os ContainerRegistryTask#os}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.architecture">Architecture</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#architecture ContainerRegistryTask#architecture}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.variant">Variant</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#variant ContainerRegistryTask#variant}. |

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.os"></a>

```go
Os *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#os ContainerRegistryTask#os}.

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.architecture"></a>

```go
Architecture *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#architecture ContainerRegistryTask#architecture}.

---

##### `Variant`<sup>Optional</sup> <a name="Variant" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform.property.variant"></a>

```go
Variant *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#variant ContainerRegistryTask#variant}.

---

### ContainerRegistryTaskRegistryCredential <a name="ContainerRegistryTaskRegistryCredential" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskRegistryCredential {
	Custom: interface{},
	Source: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential.property.custom">Custom</a></code> | <code>interface{}</code> | custom block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a></code> | source block. |

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential.property.custom"></a>

```go
Custom interface{}
```

- *Type:* interface{}

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#custom ContainerRegistryTask#custom}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential.property.source"></a>

```go
Source ContainerRegistryTaskRegistryCredentialSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#source ContainerRegistryTask#source}

---

### ContainerRegistryTaskRegistryCredentialCustom <a name="ContainerRegistryTaskRegistryCredentialCustom" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskRegistryCredentialCustom {
	LoginServer: *string,
	Identity: *string,
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.loginServer">LoginServer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#login_server ContainerRegistryTask#login_server}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.identity">Identity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#identity ContainerRegistryTask#identity}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#password ContainerRegistryTask#password}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#username ContainerRegistryTask#username}. |

---

##### `LoginServer`<sup>Required</sup> <a name="LoginServer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.loginServer"></a>

```go
LoginServer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#login_server ContainerRegistryTask#login_server}.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.identity"></a>

```go
Identity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#identity ContainerRegistryTask#identity}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#password ContainerRegistryTask#password}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustom.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#username ContainerRegistryTask#username}.

---

### ContainerRegistryTaskRegistryCredentialSource <a name="ContainerRegistryTaskRegistryCredentialSource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskRegistryCredentialSource {
	LoginMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource.property.loginMode">LoginMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#login_mode ContainerRegistryTask#login_mode}. |

---

##### `LoginMode`<sup>Required</sup> <a name="LoginMode" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource.property.loginMode"></a>

```go
LoginMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#login_mode ContainerRegistryTask#login_mode}.

---

### ContainerRegistryTaskSourceTrigger <a name="ContainerRegistryTaskSourceTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskSourceTrigger {
	Events: *[]*string,
	Name: *string,
	RepositoryUrl: *string,
	SourceType: *string,
	Authentication: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication,
	Branch: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.events">Events</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#events ContainerRegistryTask#events}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#repository_url ContainerRegistryTask#repository_url}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#source_type ContainerRegistryTask#source_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.branch">Branch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#branch ContainerRegistryTask#branch}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}. |

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.events"></a>

```go
Events *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#events ContainerRegistryTask#events}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}.

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.repositoryUrl"></a>

```go
RepositoryUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#repository_url ContainerRegistryTask#repository_url}.

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#source_type ContainerRegistryTask#source_type}.

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.authentication"></a>

```go
Authentication ContainerRegistryTaskSourceTriggerAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#authentication ContainerRegistryTask#authentication}

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#branch ContainerRegistryTask#branch}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTrigger.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}.

---

### ContainerRegistryTaskSourceTriggerAuthentication <a name="ContainerRegistryTaskSourceTriggerAuthentication" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskSourceTriggerAuthentication {
	Token: *string,
	TokenType: *string,
	ExpireInSeconds: *f64,
	RefreshToken: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.token">Token</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#token ContainerRegistryTask#token}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.tokenType">TokenType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#token_type ContainerRegistryTask#token_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.expireInSeconds">ExpireInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#expire_in_seconds ContainerRegistryTask#expire_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#refresh_token ContainerRegistryTask#refresh_token}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#scope ContainerRegistryTask#scope}. |

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.token"></a>

```go
Token *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#token ContainerRegistryTask#token}.

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#token_type ContainerRegistryTask#token_type}.

---

##### `ExpireInSeconds`<sup>Optional</sup> <a name="ExpireInSeconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.expireInSeconds"></a>

```go
ExpireInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#expire_in_seconds ContainerRegistryTask#expire_in_seconds}.

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.refreshToken"></a>

```go
RefreshToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#refresh_token ContainerRegistryTask#refresh_token}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#scope ContainerRegistryTask#scope}.

---

### ContainerRegistryTaskTimeouts <a name="ContainerRegistryTaskTimeouts" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#create ContainerRegistryTask#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#delete ContainerRegistryTask#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#read ContainerRegistryTask#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#update ContainerRegistryTask#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#create ContainerRegistryTask#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#delete ContainerRegistryTask#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#read ContainerRegistryTask#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#update ContainerRegistryTask#update}.

---

### ContainerRegistryTaskTimerTrigger <a name="ContainerRegistryTaskTimerTrigger" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

&containerregistrytask.ContainerRegistryTaskTimerTrigger {
	Name: *string,
	Schedule: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.schedule">Schedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#schedule ContainerRegistryTask#schedule}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#name ContainerRegistryTask#name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#schedule ContainerRegistryTask#schedule}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTrigger.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/container_registry_task#enabled ContainerRegistryTask#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryTaskAgentSettingOutputReference <a name="ContainerRegistryTaskAgentSettingOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskAgentSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskAgentSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryTaskAgentSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskAgentSetting">ContainerRegistryTaskAgentSetting</a>

---


### ContainerRegistryTaskBaseImageTriggerOutputReference <a name="ContainerRegistryTaskBaseImageTriggerOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskBaseImageTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskBaseImageTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetUpdateTriggerEndpoint">ResetUpdateTriggerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetUpdateTriggerPayloadType">ResetUpdateTriggerPayloadType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetUpdateTriggerEndpoint` <a name="ResetUpdateTriggerEndpoint" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetUpdateTriggerEndpoint"></a>

```go
func ResetUpdateTriggerEndpoint()
```

##### `ResetUpdateTriggerPayloadType` <a name="ResetUpdateTriggerPayloadType" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.resetUpdateTriggerPayloadType"></a>

```go
func ResetUpdateTriggerPayloadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerEndpointInput">UpdateTriggerEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerPayloadTypeInput">UpdateTriggerPayloadTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerEndpoint">UpdateTriggerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerPayloadType">UpdateTriggerPayloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UpdateTriggerEndpointInput`<sup>Optional</sup> <a name="UpdateTriggerEndpointInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerEndpointInput"></a>

```go
func UpdateTriggerEndpointInput() *string
```

- *Type:* *string

---

##### `UpdateTriggerPayloadTypeInput`<sup>Optional</sup> <a name="UpdateTriggerPayloadTypeInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerPayloadTypeInput"></a>

```go
func UpdateTriggerPayloadTypeInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateTriggerEndpoint`<sup>Required</sup> <a name="UpdateTriggerEndpoint" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerEndpoint"></a>

```go
func UpdateTriggerEndpoint() *string
```

- *Type:* *string

---

##### `UpdateTriggerPayloadType`<sup>Required</sup> <a name="UpdateTriggerPayloadType" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.updateTriggerPayloadType"></a>

```go
func UpdateTriggerPayloadType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryTaskBaseImageTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskBaseImageTrigger">ContainerRegistryTaskBaseImageTrigger</a>

---


### ContainerRegistryTaskDockerStepOutputReference <a name="ContainerRegistryTaskDockerStepOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskDockerStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskDockerStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetCacheEnabled">ResetCacheEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetImageNames">ResetImageNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetPushEnabled">ResetPushEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetSecretArguments">ResetSecretArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetCacheEnabled` <a name="ResetCacheEnabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetCacheEnabled"></a>

```go
func ResetCacheEnabled()
```

##### `ResetImageNames` <a name="ResetImageNames" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetImageNames"></a>

```go
func ResetImageNames()
```

##### `ResetPushEnabled` <a name="ResetPushEnabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetPushEnabled"></a>

```go
func ResetPushEnabled()
```

##### `ResetSecretArguments` <a name="ResetSecretArguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetSecretArguments"></a>

```go
func ResetSecretArguments()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.cacheEnabledInput">CacheEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextAccessTokenInput">ContextAccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextPathInput">ContextPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.dockerfilePathInput">DockerfilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.imageNamesInput">ImageNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.pushEnabledInput">PushEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.secretArgumentsInput">SecretArgumentsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.arguments">Arguments</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.cacheEnabled">CacheEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextAccessToken">ContextAccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextPath">ContextPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.dockerfilePath">DockerfilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.imageNames">ImageNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.pushEnabled">PushEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.secretArguments">SecretArguments</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.argumentsInput"></a>

```go
func ArgumentsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CacheEnabledInput`<sup>Optional</sup> <a name="CacheEnabledInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.cacheEnabledInput"></a>

```go
func CacheEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ContextAccessTokenInput`<sup>Optional</sup> <a name="ContextAccessTokenInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextAccessTokenInput"></a>

```go
func ContextAccessTokenInput() *string
```

- *Type:* *string

---

##### `ContextPathInput`<sup>Optional</sup> <a name="ContextPathInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextPathInput"></a>

```go
func ContextPathInput() *string
```

- *Type:* *string

---

##### `DockerfilePathInput`<sup>Optional</sup> <a name="DockerfilePathInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.dockerfilePathInput"></a>

```go
func DockerfilePathInput() *string
```

- *Type:* *string

---

##### `ImageNamesInput`<sup>Optional</sup> <a name="ImageNamesInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.imageNamesInput"></a>

```go
func ImageNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PushEnabledInput`<sup>Optional</sup> <a name="PushEnabledInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.pushEnabledInput"></a>

```go
func PushEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SecretArgumentsInput`<sup>Optional</sup> <a name="SecretArgumentsInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.secretArgumentsInput"></a>

```go
func SecretArgumentsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.arguments"></a>

```go
func Arguments() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CacheEnabled`<sup>Required</sup> <a name="CacheEnabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.cacheEnabled"></a>

```go
func CacheEnabled() interface{}
```

- *Type:* interface{}

---

##### `ContextAccessToken`<sup>Required</sup> <a name="ContextAccessToken" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextAccessToken"></a>

```go
func ContextAccessToken() *string
```

- *Type:* *string

---

##### `ContextPath`<sup>Required</sup> <a name="ContextPath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.contextPath"></a>

```go
func ContextPath() *string
```

- *Type:* *string

---

##### `DockerfilePath`<sup>Required</sup> <a name="DockerfilePath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.dockerfilePath"></a>

```go
func DockerfilePath() *string
```

- *Type:* *string

---

##### `ImageNames`<sup>Required</sup> <a name="ImageNames" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.imageNames"></a>

```go
func ImageNames() *[]*string
```

- *Type:* *[]*string

---

##### `PushEnabled`<sup>Required</sup> <a name="PushEnabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.pushEnabled"></a>

```go
func PushEnabled() interface{}
```

- *Type:* interface{}

---

##### `SecretArguments`<sup>Required</sup> <a name="SecretArguments" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.secretArguments"></a>

```go
func SecretArguments() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStepOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryTaskDockerStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskDockerStep">ContainerRegistryTaskDockerStep</a>

---


### ContainerRegistryTaskEncodedStepOutputReference <a name="ContainerRegistryTaskEncodedStepOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskEncodedStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskEncodedStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetContextAccessToken">ResetContextAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetContextPath">ResetContextPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetSecretValues">ResetSecretValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetValueContent">ResetValueContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContextAccessToken` <a name="ResetContextAccessToken" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetContextAccessToken"></a>

```go
func ResetContextAccessToken()
```

##### `ResetContextPath` <a name="ResetContextPath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetContextPath"></a>

```go
func ResetContextPath()
```

##### `ResetSecretValues` <a name="ResetSecretValues" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetSecretValues"></a>

```go
func ResetSecretValues()
```

##### `ResetValueContent` <a name="ResetValueContent" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetValueContent"></a>

```go
func ResetValueContent()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextAccessTokenInput">ContextAccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextPathInput">ContextPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.secretValuesInput">SecretValuesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.taskContentInput">TaskContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valueContentInput">ValueContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextAccessToken">ContextAccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextPath">ContextPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.secretValues">SecretValues</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.taskContent">TaskContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valueContent">ValueContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.values">Values</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextAccessTokenInput`<sup>Optional</sup> <a name="ContextAccessTokenInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextAccessTokenInput"></a>

```go
func ContextAccessTokenInput() *string
```

- *Type:* *string

---

##### `ContextPathInput`<sup>Optional</sup> <a name="ContextPathInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextPathInput"></a>

```go
func ContextPathInput() *string
```

- *Type:* *string

---

##### `SecretValuesInput`<sup>Optional</sup> <a name="SecretValuesInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.secretValuesInput"></a>

```go
func SecretValuesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaskContentInput`<sup>Optional</sup> <a name="TaskContentInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.taskContentInput"></a>

```go
func TaskContentInput() *string
```

- *Type:* *string

---

##### `ValueContentInput`<sup>Optional</sup> <a name="ValueContentInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valueContentInput"></a>

```go
func ValueContentInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContextAccessToken`<sup>Required</sup> <a name="ContextAccessToken" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextAccessToken"></a>

```go
func ContextAccessToken() *string
```

- *Type:* *string

---

##### `ContextPath`<sup>Required</sup> <a name="ContextPath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.contextPath"></a>

```go
func ContextPath() *string
```

- *Type:* *string

---

##### `SecretValues`<sup>Required</sup> <a name="SecretValues" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.secretValues"></a>

```go
func SecretValues() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaskContent`<sup>Required</sup> <a name="TaskContent" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.taskContent"></a>

```go
func TaskContent() *string
```

- *Type:* *string

---

##### `ValueContent`<sup>Required</sup> <a name="ValueContent" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.valueContent"></a>

```go
func ValueContent() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.values"></a>

```go
func Values() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStepOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryTaskEncodedStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskEncodedStep">ContainerRegistryTaskEncodedStep</a>

---


### ContainerRegistryTaskFileStepOutputReference <a name="ContainerRegistryTaskFileStepOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskFileStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskFileStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetContextAccessToken">ResetContextAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetContextPath">ResetContextPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetSecretValues">ResetSecretValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetValueFilePath">ResetValueFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContextAccessToken` <a name="ResetContextAccessToken" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetContextAccessToken"></a>

```go
func ResetContextAccessToken()
```

##### `ResetContextPath` <a name="ResetContextPath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetContextPath"></a>

```go
func ResetContextPath()
```

##### `ResetSecretValues` <a name="ResetSecretValues" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetSecretValues"></a>

```go
func ResetSecretValues()
```

##### `ResetValueFilePath` <a name="ResetValueFilePath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetValueFilePath"></a>

```go
func ResetValueFilePath()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextAccessTokenInput">ContextAccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextPathInput">ContextPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.secretValuesInput">SecretValuesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.taskFilePathInput">TaskFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valueFilePathInput">ValueFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextAccessToken">ContextAccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextPath">ContextPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.secretValues">SecretValues</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.taskFilePath">TaskFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valueFilePath">ValueFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.values">Values</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextAccessTokenInput`<sup>Optional</sup> <a name="ContextAccessTokenInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextAccessTokenInput"></a>

```go
func ContextAccessTokenInput() *string
```

- *Type:* *string

---

##### `ContextPathInput`<sup>Optional</sup> <a name="ContextPathInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextPathInput"></a>

```go
func ContextPathInput() *string
```

- *Type:* *string

---

##### `SecretValuesInput`<sup>Optional</sup> <a name="SecretValuesInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.secretValuesInput"></a>

```go
func SecretValuesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaskFilePathInput`<sup>Optional</sup> <a name="TaskFilePathInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.taskFilePathInput"></a>

```go
func TaskFilePathInput() *string
```

- *Type:* *string

---

##### `ValueFilePathInput`<sup>Optional</sup> <a name="ValueFilePathInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valueFilePathInput"></a>

```go
func ValueFilePathInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContextAccessToken`<sup>Required</sup> <a name="ContextAccessToken" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextAccessToken"></a>

```go
func ContextAccessToken() *string
```

- *Type:* *string

---

##### `ContextPath`<sup>Required</sup> <a name="ContextPath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.contextPath"></a>

```go
func ContextPath() *string
```

- *Type:* *string

---

##### `SecretValues`<sup>Required</sup> <a name="SecretValues" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.secretValues"></a>

```go
func SecretValues() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaskFilePath`<sup>Required</sup> <a name="TaskFilePath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.taskFilePath"></a>

```go
func TaskFilePath() *string
```

- *Type:* *string

---

##### `ValueFilePath`<sup>Required</sup> <a name="ValueFilePath" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.valueFilePath"></a>

```go
func ValueFilePath() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.values"></a>

```go
func Values() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStepOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryTaskFileStep
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskFileStep">ContainerRegistryTaskFileStep</a>

---


### ContainerRegistryTaskIdentityOutputReference <a name="ContainerRegistryTaskIdentityOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryTaskIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskIdentity">ContainerRegistryTaskIdentity</a>

---


### ContainerRegistryTaskPlatformOutputReference <a name="ContainerRegistryTaskPlatformOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskPlatformOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskPlatformOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resetVariant">ResetVariant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchitecture` <a name="ResetArchitecture" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resetArchitecture"></a>

```go
func ResetArchitecture()
```

##### `ResetVariant` <a name="ResetVariant" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.resetVariant"></a>

```go
func ResetVariant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.architectureInput">ArchitectureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.osInput">OsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.variantInput">VariantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.os">Os</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.variant">Variant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.architectureInput"></a>

```go
func ArchitectureInput() *string
```

- *Type:* *string

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.osInput"></a>

```go
func OsInput() *string
```

- *Type:* *string

---

##### `VariantInput`<sup>Optional</sup> <a name="VariantInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.variantInput"></a>

```go
func VariantInput() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.os"></a>

```go
func Os() *string
```

- *Type:* *string

---

##### `Variant`<sup>Required</sup> <a name="Variant" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.variant"></a>

```go
func Variant() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatformOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryTaskPlatform
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskPlatform">ContainerRegistryTaskPlatform</a>

---


### ContainerRegistryTaskRegistryCredentialCustomList <a name="ContainerRegistryTaskRegistryCredentialCustomList" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskRegistryCredentialCustomList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerRegistryTaskRegistryCredentialCustomList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.get"></a>

```go
func Get(index *f64) ContainerRegistryTaskRegistryCredentialCustomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerRegistryTaskRegistryCredentialCustomOutputReference <a name="ContainerRegistryTaskRegistryCredentialCustomOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskRegistryCredentialCustomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerRegistryTaskRegistryCredentialCustomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.identityInput">IdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.loginServerInput">LoginServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.loginServer">LoginServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.identityInput"></a>

```go
func IdentityInput() *string
```

- *Type:* *string

---

##### `LoginServerInput`<sup>Optional</sup> <a name="LoginServerInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.loginServerInput"></a>

```go
func LoginServerInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `LoginServer`<sup>Required</sup> <a name="LoginServer" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.loginServer"></a>

```go
func LoginServer() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerRegistryTaskRegistryCredentialOutputReference <a name="ContainerRegistryTaskRegistryCredentialOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskRegistryCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskRegistryCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustom` <a name="PutCustom" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putCustom"></a>

```go
func PutCustom(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putCustom.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putSource"></a>

```go
func PutSource(value ContainerRegistryTaskRegistryCredentialSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a>

---

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resetCustom"></a>

```go
func ResetCustom()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList">ContainerRegistryTaskRegistryCredentialCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference">ContainerRegistryTaskRegistryCredentialSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.customInput">CustomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.custom"></a>

```go
func Custom() ContainerRegistryTaskRegistryCredentialCustomList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialCustomList">ContainerRegistryTaskRegistryCredentialCustomList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.source"></a>

```go
func Source() ContainerRegistryTaskRegistryCredentialSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference">ContainerRegistryTaskRegistryCredentialSourceOutputReference</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.customInput"></a>

```go
func CustomInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.sourceInput"></a>

```go
func SourceInput() ContainerRegistryTaskRegistryCredentialSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryTaskRegistryCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredential">ContainerRegistryTaskRegistryCredential</a>

---


### ContainerRegistryTaskRegistryCredentialSourceOutputReference <a name="ContainerRegistryTaskRegistryCredentialSourceOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskRegistryCredentialSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskRegistryCredentialSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.loginModeInput">LoginModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.loginMode">LoginMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoginModeInput`<sup>Optional</sup> <a name="LoginModeInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.loginModeInput"></a>

```go
func LoginModeInput() *string
```

- *Type:* *string

---

##### `LoginMode`<sup>Required</sup> <a name="LoginMode" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.loginMode"></a>

```go
func LoginMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryTaskRegistryCredentialSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskRegistryCredentialSource">ContainerRegistryTaskRegistryCredentialSource</a>

---


### ContainerRegistryTaskSourceTriggerAuthenticationOutputReference <a name="ContainerRegistryTaskSourceTriggerAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskSourceTriggerAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskSourceTriggerAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetExpireInSeconds">ResetExpireInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpireInSeconds` <a name="ResetExpireInSeconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetExpireInSeconds"></a>

```go
func ResetExpireInSeconds()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetRefreshToken"></a>

```go
func ResetRefreshToken()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.expireInSecondsInput">ExpireInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.expireInSeconds">ExpireInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireInSecondsInput`<sup>Optional</sup> <a name="ExpireInSecondsInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.expireInSecondsInput"></a>

```go
func ExpireInSecondsInput() *f64
```

- *Type:* *f64

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.refreshTokenInput"></a>

```go
func RefreshTokenInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `ExpireInSeconds`<sup>Required</sup> <a name="ExpireInSeconds" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.expireInSeconds"></a>

```go
func ExpireInSeconds() *f64
```

- *Type:* *f64

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.refreshToken"></a>

```go
func RefreshToken() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerRegistryTaskSourceTriggerAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a>

---


### ContainerRegistryTaskSourceTriggerList <a name="ContainerRegistryTaskSourceTriggerList" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskSourceTriggerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerRegistryTaskSourceTriggerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.get"></a>

```go
func Get(index *f64) ContainerRegistryTaskSourceTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerRegistryTaskSourceTriggerOutputReference <a name="ContainerRegistryTaskSourceTriggerOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskSourceTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerRegistryTaskSourceTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.putAuthentication"></a>

```go
func PutAuthentication(value ContainerRegistryTaskSourceTriggerAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetAuthentication"></a>

```go
func ResetAuthentication()
```

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference">ContainerRegistryTaskSourceTriggerAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.eventsInput">EventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.authentication"></a>

```go
func Authentication() ContainerRegistryTaskSourceTriggerAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthenticationOutputReference">ContainerRegistryTaskSourceTriggerAuthenticationOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.authenticationInput"></a>

```go
func AuthenticationInput() ContainerRegistryTaskSourceTriggerAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerAuthentication">ContainerRegistryTaskSourceTriggerAuthentication</a>

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.eventsInput"></a>

```go
func EventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.repositoryUrlInput"></a>

```go
func RepositoryUrlInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.repositoryUrl"></a>

```go
func RepositoryUrl() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskSourceTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerRegistryTaskTimeoutsOutputReference <a name="ContainerRegistryTaskTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerRegistryTaskTimerTriggerList <a name="ContainerRegistryTaskTimerTriggerList" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskTimerTriggerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerRegistryTaskTimerTriggerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.get"></a>

```go
func Get(index *f64) ContainerRegistryTaskTimerTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerRegistryTaskTimerTriggerOutputReference <a name="ContainerRegistryTaskTimerTriggerOutputReference" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerregistrytask"

containerregistrytask.NewContainerRegistryTaskTimerTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerRegistryTaskTimerTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTask.ContainerRegistryTaskTimerTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



