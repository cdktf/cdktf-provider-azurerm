# `botChannelDirectLineSpeech` Submodule <a name="`botChannelDirectLineSpeech` Submodule" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelDirectLineSpeech <a name="BotChannelDirectLineSpeech" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech azurerm_bot_channel_direct_line_speech}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_channel_direct_line_speech.BotChannelDirectLineSpeech;

BotChannelDirectLineSpeech.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .botName(java.lang.String)
    .cognitiveServiceAccessKey(java.lang.String)
    .cognitiveServiceLocation(java.lang.String)
    .location(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .cognitiveAccountId(java.lang.String)
//  .customSpeechModelId(java.lang.String)
//  .customVoiceDeploymentId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(BotChannelDirectLineSpeechTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.botName">botName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveServiceAccessKey">cognitiveServiceAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveServiceLocation">cognitiveServiceLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveAccountId">cognitiveAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.customSpeechModelId">customSpeechModelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.customVoiceDeploymentId">customVoiceDeploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.botName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}.

---

##### `cognitiveServiceAccessKey`<sup>Required</sup> <a name="cognitiveServiceAccessKey" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveServiceAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}.

---

##### `cognitiveServiceLocation`<sup>Required</sup> <a name="cognitiveServiceLocation" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveServiceLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}.

---

##### `cognitiveAccountId`<sup>Optional</sup> <a name="cognitiveAccountId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.cognitiveAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}.

---

##### `customSpeechModelId`<sup>Optional</sup> <a name="customSpeechModelId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.customSpeechModelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}.

---

##### `customVoiceDeploymentId`<sup>Optional</sup> <a name="customVoiceDeploymentId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.customVoiceDeploymentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#timeouts BotChannelDirectLineSpeech#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCognitiveAccountId">resetCognitiveAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomSpeechModelId">resetCustomSpeechModelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomVoiceDeploymentId">resetCustomVoiceDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts"></a>

```java
public void putTimeouts(BotChannelDirectLineSpeechTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

---

##### `resetCognitiveAccountId` <a name="resetCognitiveAccountId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCognitiveAccountId"></a>

```java
public void resetCognitiveAccountId()
```

##### `resetCustomSpeechModelId` <a name="resetCustomSpeechModelId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomSpeechModelId"></a>

```java
public void resetCustomSpeechModelId()
```

##### `resetCustomVoiceDeploymentId` <a name="resetCustomVoiceDeploymentId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomVoiceDeploymentId"></a>

```java
public void resetCustomVoiceDeploymentId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BotChannelDirectLineSpeech resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_channel_direct_line_speech.BotChannelDirectLineSpeech;

BotChannelDirectLineSpeech.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_channel_direct_line_speech.BotChannelDirectLineSpeech;

BotChannelDirectLineSpeech.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_channel_direct_line_speech.BotChannelDirectLineSpeech;

BotChannelDirectLineSpeech.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_channel_direct_line_speech.BotChannelDirectLineSpeech;

BotChannelDirectLineSpeech.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BotChannelDirectLineSpeech.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BotChannelDirectLineSpeech resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BotChannelDirectLineSpeech to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BotChannelDirectLineSpeech that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BotChannelDirectLineSpeech to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference">BotChannelDirectLineSpeechTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botNameInput">botNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountIdInput">cognitiveAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKeyInput">cognitiveServiceAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocationInput">cognitiveServiceLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelIdInput">customSpeechModelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentIdInput">customVoiceDeploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botName">botName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKey">cognitiveServiceAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocation">cognitiveServiceLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelId">customSpeechModelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentId">customVoiceDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeouts"></a>

```java
public BotChannelDirectLineSpeechTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference">BotChannelDirectLineSpeechTimeoutsOutputReference</a>

---

##### `botNameInput`<sup>Optional</sup> <a name="botNameInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botNameInput"></a>

```java
public java.lang.String getBotNameInput();
```

- *Type:* java.lang.String

---

##### `cognitiveAccountIdInput`<sup>Optional</sup> <a name="cognitiveAccountIdInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountIdInput"></a>

```java
public java.lang.String getCognitiveAccountIdInput();
```

- *Type:* java.lang.String

---

##### `cognitiveServiceAccessKeyInput`<sup>Optional</sup> <a name="cognitiveServiceAccessKeyInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKeyInput"></a>

```java
public java.lang.String getCognitiveServiceAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `cognitiveServiceLocationInput`<sup>Optional</sup> <a name="cognitiveServiceLocationInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocationInput"></a>

```java
public java.lang.String getCognitiveServiceLocationInput();
```

- *Type:* java.lang.String

---

##### `customSpeechModelIdInput`<sup>Optional</sup> <a name="customSpeechModelIdInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelIdInput"></a>

```java
public java.lang.String getCustomSpeechModelIdInput();
```

- *Type:* java.lang.String

---

##### `customVoiceDeploymentIdInput`<sup>Optional</sup> <a name="customVoiceDeploymentIdInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentIdInput"></a>

```java
public java.lang.String getCustomVoiceDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botName"></a>

```java
public java.lang.String getBotName();
```

- *Type:* java.lang.String

---

##### `cognitiveAccountId`<sup>Required</sup> <a name="cognitiveAccountId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountId"></a>

```java
public java.lang.String getCognitiveAccountId();
```

- *Type:* java.lang.String

---

##### `cognitiveServiceAccessKey`<sup>Required</sup> <a name="cognitiveServiceAccessKey" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKey"></a>

```java
public java.lang.String getCognitiveServiceAccessKey();
```

- *Type:* java.lang.String

---

##### `cognitiveServiceLocation`<sup>Required</sup> <a name="cognitiveServiceLocation" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocation"></a>

```java
public java.lang.String getCognitiveServiceLocation();
```

- *Type:* java.lang.String

---

##### `customSpeechModelId`<sup>Required</sup> <a name="customSpeechModelId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelId"></a>

```java
public java.lang.String getCustomSpeechModelId();
```

- *Type:* java.lang.String

---

##### `customVoiceDeploymentId`<sup>Required</sup> <a name="customVoiceDeploymentId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentId"></a>

```java
public java.lang.String getCustomVoiceDeploymentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelDirectLineSpeechConfig <a name="BotChannelDirectLineSpeechConfig" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_channel_direct_line_speech.BotChannelDirectLineSpeechConfig;

BotChannelDirectLineSpeechConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .botName(java.lang.String)
    .cognitiveServiceAccessKey(java.lang.String)
    .cognitiveServiceLocation(java.lang.String)
    .location(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .cognitiveAccountId(java.lang.String)
//  .customSpeechModelId(java.lang.String)
//  .customVoiceDeploymentId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(BotChannelDirectLineSpeechTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.botName">botName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceAccessKey">cognitiveServiceAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceLocation">cognitiveServiceLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customSpeechModelId">customSpeechModelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customVoiceDeploymentId">customVoiceDeploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.botName"></a>

```java
public java.lang.String getBotName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}.

---

##### `cognitiveServiceAccessKey`<sup>Required</sup> <a name="cognitiveServiceAccessKey" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceAccessKey"></a>

```java
public java.lang.String getCognitiveServiceAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}.

---

##### `cognitiveServiceLocation`<sup>Required</sup> <a name="cognitiveServiceLocation" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceLocation"></a>

```java
public java.lang.String getCognitiveServiceLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}.

---

##### `cognitiveAccountId`<sup>Optional</sup> <a name="cognitiveAccountId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveAccountId"></a>

```java
public java.lang.String getCognitiveAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}.

---

##### `customSpeechModelId`<sup>Optional</sup> <a name="customSpeechModelId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customSpeechModelId"></a>

```java
public java.lang.String getCustomSpeechModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}.

---

##### `customVoiceDeploymentId`<sup>Optional</sup> <a name="customVoiceDeploymentId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customVoiceDeploymentId"></a>

```java
public java.lang.String getCustomVoiceDeploymentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.timeouts"></a>

```java
public BotChannelDirectLineSpeechTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#timeouts BotChannelDirectLineSpeech#timeouts}

---

### BotChannelDirectLineSpeechTimeouts <a name="BotChannelDirectLineSpeechTimeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_channel_direct_line_speech.BotChannelDirectLineSpeechTimeouts;

BotChannelDirectLineSpeechTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#create BotChannelDirectLineSpeech#create}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#delete BotChannelDirectLineSpeech#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#read BotChannelDirectLineSpeech#read}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#update BotChannelDirectLineSpeech#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#create BotChannelDirectLineSpeech#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#delete BotChannelDirectLineSpeech#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#read BotChannelDirectLineSpeech#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/bot_channel_direct_line_speech#update BotChannelDirectLineSpeech#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelDirectLineSpeechTimeoutsOutputReference <a name="BotChannelDirectLineSpeechTimeoutsOutputReference" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.bot_channel_direct_line_speech.BotChannelDirectLineSpeechTimeoutsOutputReference;

new BotChannelDirectLineSpeechTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

---



